import * as d3 from "d3";
import { VisualisationFullOptions } from "../../visualisations";

export interface DoughnutOptions extends VisualisationFullOptions {
  vizType: "doughnut",
  data: VisualisationFullOptions['data'] & {
    percent: number,
  },
}

export default function(vizChart: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: DoughnutOptions) {
  var width = 300;
  var radius = width / 2;
  var arrowSize = radius * 0.06;
  var arrowOffset = radius * 0.02;
  var selectedOffset = radius * 0.07;
  var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;

  if (!options.data || !options.data.percent) return;

  vizChart.insert('div')
  .classed('nhsd-viz-doughnut-percentage', true)
  .classed('nhsd-viz-body', true)
  .text(`${options.data.percent}%`);

  const svg = vizChart.insert('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('preserveAspectRatio','xMidYMid meet')
  .attr("viewBox", [0, 0, width, width])
  .attr('aria-hidden', true)
  .style('width', '100%');

  var arc = d3.arc()
    .outerRadius(arcRadius)
    .innerRadius(arcRadius * 0.75);

  var pie = d3.pie()
    .sortValues(a => a);

  var svgGroup = svg
    .classed('nhsd-viz-doughnut', true)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")
    .classed('nhsd-viz-doughnut-arcs', true);

  var data = [options.data.percent, 100 - options.data.percent];
  var emptyPies = svgGroup.selectAll(".nhsd-viz-doughnut-arcs")
    .data(pie(data))
    .enter()
    .append("g");

  emptyPies.append("path")
  .attr("d", arc)
  .attr('class', (d, i) => i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary');

  const arcs = pie(data);
  if (arcs && arcs[0]) {
    var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
    var angleDeg = angle * (180 / Math.PI);

    const line = d3.line();
    const arrowGroup = svgGroup.append('g')
    .classed('nhsd-viz-doughnut-arrow', true);

    arrowGroup.append("path")
    .attr("d", line([[0,0],[arrowSize * 0.8,-arrowSize],[-arrowSize * 0.8,-arrowSize]]))
    .classed('nhsd-viz-fill-primary', true)
    .attr('transform', `rotate(${angleDeg}) translate(${0},${-(arcRadius + arrowOffset)})`);
    }
  return svgGroup;
}