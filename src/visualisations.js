import "core-js/stable";
import "regenerator-runtime/runtime"

import * as d3 from "d3";
import config from "./config";
import xiny from './visualisations/xiny';

const generateId = () => Math.random().toString(16).slice(2);

async function render(selector, viz, options) {
    if (!options) {
        throw new Error("Visualisation options not set");
    }

    const visualisationId = generateId();

    const target = d3.select(selector).html("");

    const vizWrapper = target.insert('article')
    .attr('id', `nhsd-viz-${visualisationId}`)
    .attr('class', `nhsd-viz`)
    .style('padding', `${config.padding}px`);

    if (options.title) {
        vizWrapper.attr('aria-labelledby', `nhsd-viz-${visualisationId}-title`)
        .append('h1')
        .attr('id', `nhsd-viz-${visualisationId}-title`)
        .classed('nhsd-viz-title', true)
        .text(options.title);
    }

    if (options.desc) {
        vizWrapper.attr('aria-describedby', `nhsd-viz-${visualisationId}-description`)
        .append('p')
        .attr('id', `nhsd-viz-${visualisationId}-description`)
        .classed('nhsd-viz-body', true)
        .text(options.desc);
    }

    const svg = vizWrapper.insert('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('preserveAspectRatio','xMidYMid meet')
    .attr('aria-hidden', true)
    .attr('width', width)
    .style('width', '100%');

    const width = svg.node().getBoundingClientRect().width;
    let yPos = 0;

    if (viz == 'xiny') {
        try {
            const vizSvg = await xiny(vizWrapper, {...options, width});
            yPos += vizSvg.node().getBBox().height;
            svg.attr("viewBox", [0, 0, width, yPos]);
            await loadImages(svg);
        } catch (e) {
            console.error(e);
        }
    }

    if (options.source && options.source.text) {
        const element = vizWrapper.append('p')
        .classed('nhsd-viz-body', true)
        .text('Source: ');

        if (options.source.href) {
            element.append('a')
            .attr('href', options.source.href)
            .text(options.source.text);
        } else {
            element.text(options.source.text);
        }
    }

    return vizWrapper.node();
}

async function loadImages(svg) {
    const imageLoads = [];
    svg.selectAll('image').each(function() {
        const image = d3.select(this);
        imageLoads.push(new Promise(res => image.on('load', () => res())));
        image.attr('xlink:href', image.attr('data-href'));
    });
    await Promise.all(imageLoads);
}

export default function viz(selector, viz, options) {
    window.addEventListener('resize', () => render(selector, viz, options));
    return render(selector, viz, options);
}
