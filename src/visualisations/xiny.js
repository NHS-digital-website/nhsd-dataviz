import * as d3 from "d3";
import wordWrap from '../helpers/word-wrap';
import srOnly from '../helpers/sr-only';
import slugify from '../helpers/slugify';

const itemLimit = 10;
const itemPadding = 0.05;
const vizPadding = 10;
const axisLabelWidth = 80;
const axisLabelPadding = 10;

function bindEvents(vizWrapper) {
    const svg = vizWrapper.select('svg');
    svg.selectAll('.nhsd-viz-data-series').on('mouseout', function() {
        vizWrapper.selectAll('[data-series]').property('checked', true);
        svg.selectAll('.nhsd-viz-data-series').attr('opacity', 1);
    });
    svg.selectAll('.nhsd-viz-data-series').on('mouseover', function(e, d) {
        vizWrapper.selectAll('[data-series]').property('checked', false);
        svg.selectAll('.nhsd-viz-data-series').attr('opacity', 0.5);
        d3.select(this).attr('opacity', 1);
        const seriesId = d3.select(this).attr('id');
        vizWrapper.select(`[data-series="${seriesId}"]`).property('checked', true);
    });
    vizWrapper.selectAll('[data-series]').on('click', function() {
        svg.selectAll('.nhsd-viz-data-series').attr('opacity', 1);
        vizWrapper.selectAll('[data-series]').each(function() {
            const checked = d3.select(this).property('checked');
            const seriesId = d3.select(this).attr('data-series');
            svg.select(`#${seriesId}`).attr('opacity', checked ? 1 : 0.5);
        });
    });
}

export default async function xiny(vizWrapper, options) {
    // Max restrict max images
    if (options.data.y > itemLimit) {
        const divider = itemLimit / options.data.y;
        options.data.x = options.data.x * divider;
        options.data.y = itemLimit;
    }

    // Load image
    const data = await Promise.all(options.data.map(async (seriesData) => ({ 
        ...seriesData,
        img: await d3.image(seriesData.img)
    })));

    const vizWidth = options.width - ((axisLabelWidth + axisLabelPadding) * 2);

    let vizIndex = 0;
    let yPos = 0;
    const svg = vizWrapper.select('svg');
    const vizGroup = svg.append('svg:g');
    vizGroup.selectAll('g')
    .data(data)
    .join('svg:g')
    .each(function(data) {
        const scaleBand = d3.scaleBand()
        .domain(Array(data.y).fill().map((v, i) => i))
        .range([0, vizWidth])
        .paddingInner(itemPadding);

        const itemHeight = scaleBand.bandwidth() * (data.img.naturalHeight / data.img.naturalWidth);
        const vizHeight = itemHeight + (vizPadding * 2);

        const selection = d3.select(this);
        selection.attr("transform",`translate(0,${yPos})`)
        .attr('class', 'nhsd-viz-data-series')
        .attr('id', `series-${slugify(data.axisTitle)}`)
        .attr('pointer-events', 'bounding-box')
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', options.width)
        .attr('height', vizHeight)
        .attr('opacity', 0);

        let xPos = 0;
        selection.append('text').text(d => d.axisTitle)
        .attr('x', axisLabelWidth)
        .attr('y', vizHeight / 2)
        .attr('dominant-baseline', 'middle')
        .attr('text-anchor', 'end')
        .attr('class', 'nhsd-viz-body')
        .attr('font-size', 16)
        .call(wordWrap, axisLabelWidth);
        xPos += axisLabelWidth + axisLabelPadding;

        const greyscaledGroup = selection.append('g')
        .attr("transform",`translate(0,${vizPadding})`)
        .attr('aria-hidden', true);
        const activeGroup = selection.append('g')
        .attr("transform",`translate(0,${vizPadding})`)
        .attr('aria-hidden', true);

        for(let i = 0; i < data.y; i++) {
            greyscaledGroup.append("svg:image")
            .style('filter', `url(#grayscale-${vizIndex})`)
            .attr('opacity', 0.5)
            .attr('x', scaleBand(i) + xPos)
            .attr('width', scaleBand.bandwidth())
            .attr('height', itemHeight)
            .attr("data-href", data.img.src);

            activeGroup.attr('clip-path', `url(#clip-${vizIndex})`)
            .append("svg:image")
            .attr('x', scaleBand(i) + xPos)
            .attr('width', scaleBand.bandwidth())
            .attr('height', itemHeight)
            .attr("data-href", data.img.src);
        }

        selection.append("filter")
        .attr("id", `grayscale-${vizIndex}`)
        .append("feColorMatrix")
        .attr("type", "matrix")
        .attr("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0")

        selection.append("clipPath")
        .attr("id", `clip-${vizIndex}`)
        .append("rect")
        .attr("x", xPos)
        .attr("y", 0)
        .attr("height", itemHeight)
        .attr("width", vizWidth * (data.x / data.y))

        xPos += vizWidth;

        const vizLabelText = selection.append('text')
        .attr('x', xPos + axisLabelPadding)
        .attr('y', vizHeight / 2)
        .attr('dominant-baseline', 'middle')
        .attr('class', 'nhsd-viz-body')
        .attr('font-size', 16);
        vizLabelText.append('tspan')
        .text(data.x);
        vizLabelText.append('tspan')
        .style('font-size', '0')
        .text(` in ${data.y}`);

        vizIndex++;
        yPos += vizHeight;
    });

    vizWrapper.append('div')
    .call(srOnly)
    .append('ul')
    .selectAll('li')
    .data(data)
    .join('li')
    .append('label')
    .text(d => `${d.axisTitle}: ${d.x} in ${d.y}`)
    .append('input')
    .attr('name', `${vizWrapper.attr('id')}-series-checkbox`)
    .attr('type', 'checkbox')
    .property('checked', true)
    .attr('data-series', d => `series-${slugify(d.axisTitle)}`)

    bindEvents(vizWrapper);

    return vizGroup;
}
