import * as d3 from "d3";
import textWrap from "../../helpers/text-wrap";
import srTable from "../sr-table";
import { VisualisationFullOptions, SeriesData } from "../../options";
export interface BarOptions extends VisualisationFullOptions {
  vizType: "bar",
  data: VisualisationFullOptions['data'] & SeriesData
}

export default function(vizChart: d3.Selection<HTMLElement, unknown, HTMLElement, any>, options: BarOptions) {
  const boundingRect = vizChart.node().getBoundingClientRect();

  const { width } = boundingRect;
  const height = Math.min(width * 0.6, 600);
  const topMargin = 8;
  let leftMargin = 46;

  if (!options.data || !options.data.series) return;

  const svg = vizChart.insert('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('preserveAspectRatio','xMidYMid meet')
  .attr("viewBox", [0, 0, width, height])
  .attr('aria-hidden', true)
  .classed('nhsd-viz-column', true)
  .style('width', '100%');

  let yAxisLabel;
  if (options.data.yAxis && options.data.yAxis.title) {
    yAxisLabel = svg.append("g")
      .attr("transform", "rotate(-90)")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "hanging")
      .attr("y", 0)
      .classed('nhsd-viz-body', true)
      .classed('nhsd-viz-column-xaxis-label', true)
      .text(options.data.yAxis.title);

      leftMargin += yAxisLabel.node().getBBox().height + 8;
  }
  
  const chartWidth = width - leftMargin;
  const chartHeight = height - topMargin;

  const x = d3.scaleBand()
    .range([ 0, chartWidth ])
    .domain(options.data.series.map(d => d.name))
    .padding(0.15);

  const chartGroup = svg.append('g')
    .attr("transform", `translate(${leftMargin},${topMargin})`);

  const labelsGroup = chartGroup.append("g")
    .call(d3.axisBottom(x).tickSize(0))
    .call(g => {
      g.attr('font-family', null);
      g.attr('font-size', null);
    })
    .classed('nhsd-viz-column-xaxis', true);

  labelsGroup.selectAll('.domain').remove();

  labelsGroup.selectAll("text")
    .classed('nhsd-viz-body', true)
    .call(textWrap, x.bandwidth());
  
  let labelHeight = 0;
  const labelPadding = 5;
  labelsGroup.selectAll<SVGSVGElement, unknown>("text")
    .each(function() {
      let thisLabelHeight = Math.ceil(this.getBBox().height);
      labelHeight = Math.max(labelHeight, thisLabelHeight);
    });

  let xAxisLabelHeight = 0;
  if (options.data.xAxis && options.data.xAxis.title) {
    xAxisLabelHeight = 28;
    chartGroup.append("g")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", chartHeight - 4)
      .attr("x", chartWidth / 2)
      .classed('nhsd-viz-body', true)
      .classed('nhsd-viz-column-xaxis-label', true)
      .text(options.data.xAxis.title)
  }

  const barWithoutLabelHeight = chartHeight - labelHeight - labelPadding - xAxisLabelHeight;

  if (yAxisLabel) {
    yAxisLabel.attr("x", -barWithoutLabelHeight / 2)
  }

  let yMin = 0;
  if (options.data.yAxis && options.data.yAxis.start != undefined) {
    yMin = options.data.yAxis.start;
  }

  let yMax = options.data.series.reduce((acc, cur) => Math.max(cur.values[0], acc), 0);
  if (options.data.yAxis && options.data.yAxis.end != undefined) {
    yMax = options.data.yAxis.end;
  }
  
  labelsGroup.attr("transform", `translate(0, ${(barWithoutLabelHeight + labelPadding)})`);  
  const y = d3.scaleLinear([ barWithoutLabelHeight, 0])
    .domain([yMin, yMax]);

  const yAxis = d3.axisLeft(y).ticks(4, "~s");
  chartGroup.append("g")
    .attr("transform", `translate(0,-1)`)
    .call(yAxis)
    .call(g => {
      g.attr('font-family', null);
      g.attr('font-size', null);
    })
    .call(
      g => g.selectAll(".tick line")
      .attr("x2", chartWidth)
      .attr("stroke-opacity", 0.3)
      .classed('nhsd-viz-body', true)
    )
    .call(g => g.selectAll(".tick text").classed('nhsd-viz-body', true))
    .call(g => g.selectAll(".domain").remove())
    .classed('nhsd-viz-column-yaxis', true);

  // Bars
  const maxBandWidth = 160;
  const bandWidth = Math.min(maxBandWidth, x.bandwidth());
  let bandOffset = 0;
  if (x.bandwidth() > bandWidth) {
    bandOffset = (x.bandwidth() - bandWidth) / 2;
  }

  chartGroup.append("g")
  .selectAll("mybar")
    .data(options.data.series)
    .enter()
    .append("rect")
    .attr("x", (d: SeriesData['series'][0]) => x(d.name) + bandOffset)
    .attr("y", (d: SeriesData['series'][0]) => y(d.values[0]))
    .attr("width", bandWidth)
    .attr("height", (d: SeriesData['series'][0]) => barWithoutLabelHeight - y(d.values[0]))
    .classed('nhsd-viz-fill-primary', true);

  // Screen reader table
  srTable(vizChart, options);

  return svg;
}