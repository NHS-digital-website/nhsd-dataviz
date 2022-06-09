import * as d3 from "d3";
import textWrap from "../../helpers/text-wrap";
import srTable from "../sr-table";
import { VisualisationFullOptions, SeriesData } from "../../options";
export interface ColumnOptions extends VisualisationFullOptions {
  vizType: "column",
  data: VisualisationFullOptions['data'] & SeriesData
}

export default function(vizChart: d3.Selection<HTMLElement, unknown, HTMLElement, any>, options: ColumnOptions) {
  const boundingRect = vizChart.node().getBoundingClientRect();

  const { width } = boundingRect;
  const chartHeight = Math.min(width * 0.4, 600);

  if (!options.data || !options.data.series) return;

  let yMin = 0;
  let yMax = options.data.series.reduce((acc, cur) => Math.max(cur.values[0], acc), 0);
  if (options.data.yAxis) {
    if (options.data.yAxis.start != undefined) {
      yMin = options.data.yAxis.start;
    }
    if (options.data.yAxis.end != undefined) {
      yMax = options.data.yAxis.end;
    }
  }

  const svg = vizChart.insert('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('preserveAspectRatio','xMidYMid meet')
  .attr("viewBox", [0, 0, width, chartHeight])
  .attr('aria-hidden', true)
  .classed('nhsd-viz-column', true)
  .style('width', '100%');

  let yAxisLabelWidth = 0;
  if (options.data.yAxis && options.data.yAxis.title) {
    const yAxisLabel = svg.append("g")
      .attr("transform", "rotate(-90)")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "hanging")
      .attr("y", 0)
      .attr("x", -chartHeight / 2)
      .classed('nhsd-viz-body', true)
      .classed('nhsd-viz-column-xaxis-label', true)
      .text(options.data.yAxis.title);

      yAxisLabelWidth += yAxisLabel.node().getBBox().height;
  }

  const chartGroup = svg.append('g');

  const y = d3.scaleLinear([chartHeight, 0])
  .domain([yMin, yMax]);

  let yAxisWidth = 0;
  const yAxisGenerator = d3.axisLeft(y).ticks(4, "~s");
  chartGroup.append("g")
    .attr("transform", `translate(0,-1)`)
    .call(yAxisGenerator)
    .call(g => {
      g.attr('font-family', null);
      g.attr('font-size', null);
    })
    .call(
      g => g.selectAll(".tick line")
      .attr("x2", width - yAxisLabelWidth)
      .attr("stroke-opacity", 0.3)
      .classed('nhsd-viz-body', true)
    )
    .call(g => g.selectAll(".tick text").classed('nhsd-viz-body', true))
    .call(g => g.selectAll<SVGTextElement, unknown>(".tick text").each(function() { 
      yAxisWidth = Math.max(yAxisWidth, this.getBBox().width)
    }))
    .call(g => g.selectAll(".domain").remove())
    .classed('nhsd-viz-column-yaxis', true);

  chartGroup.attr("transform", `translate(${(yAxisLabelWidth * 2) + yAxisWidth},${0})`);

  const chartWidth = width - (yAxisLabelWidth * 2) - yAxisWidth;

  const x = d3.scaleBand()
    .range([ 0, chartWidth ])
    .domain(options.data.series.map(d => d.name))
    .padding(0.15);

  const labelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${yAxisWidth},${0})`)
    .call(d3.axisBottom(x).tickSize(0))
    .call(g => {
      g.attr('font-family', null)
      .attr('font-size', null);
    })
    .classed('nhsd-viz-column-xaxis', true);

  labelsGroup.selectAll('.domain').remove();

  labelsGroup.selectAll("text")
    .classed('nhsd-viz-body', true)
    .attr('dy', '1em')
    .call(textWrap, x.bandwidth());

  let xAxisLabelHeight = 0;
  labelsGroup.selectAll<SVGSVGElement, unknown>("text").each(function() {
    let thisLabelHeight = this.getBBox().height;
    xAxisLabelHeight = Math.max(xAxisLabelHeight, thisLabelHeight);
  });

  let xAxisHeight = 0;
  if (options.data.xAxis && options.data.xAxis.title) {
    const xAxisGroup = chartGroup.append("g")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", chartHeight + xAxisLabelHeight)
      .attr("x", chartWidth / 2)
      .classed('nhsd-viz-body', true)
      .classed('nhsd-viz-column-xaxis-label', true)
      .append('tspan')
      .attr('dy', '1.81em')
      .text(options.data.xAxis.title);
    xAxisHeight = xAxisGroup.node().getBBox().height;
  }

  labelsGroup.attr("transform", `translate(0, ${chartHeight})`);  

  // Bars
  const maxBandWidth = 160;
  const bandWidth = Math.min(maxBandWidth, x.bandwidth());
  let bandOffset = 0;
  if (x.bandwidth() > bandWidth) {
    bandOffset = (x.bandwidth() - bandWidth) / 2;
  }

  chartGroup.append("g")
  .selectAll("nhsd-viz-column-rect")
  .data(options.data.series)
  .enter()
  .append("rect")
  .attr("x", (d: SeriesData['series'][0]) => x(d.name) + bandOffset)
  .attr("y", (d: SeriesData['series'][0]) => y(d.values[0]))
  .attr("width", bandWidth)
  .attr("height", (d: SeriesData['series'][0]) => chartHeight - y(d.values[0]))
  .classed('nhsd-viz-fill-primary', true);

  const svgHeight = chartGroup.node().getBoundingClientRect().height;

  svg.attr("viewBox", [0, 0, width, svgHeight]);

  // Screen reader table
  srTable(vizChart, options);

  return svg;
}
