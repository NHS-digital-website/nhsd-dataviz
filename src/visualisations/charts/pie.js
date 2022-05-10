import * as d3 from "d3";

export default function(svg, options) {
  var width = options.width;
  var radius = width / 2;
  var arrowSize = radius * 0.08;
  var arrowOffset = radius * 0.02;
  var selectedOffset = radius * 0.07;
  var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;

  var arc = d3.arc()
    .outerRadius(arcRadius)
    .innerRadius(0);

  var pie = d3.pie()
    .sortValues((a) => a)
    .value(d => d);

  var svgGroup = svg
    .classed('nhsd-viz-pie', true)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")")
    .classed('nhsd-viz-pie-arcs', true);

  var data = [options.data.percent, 100 - options.data.percent];
  var emptyPies = svgGroup.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g");

  emptyPies.append("path")
  .attr("d", d => arc(d))
  .attr("transform", (d, i) => {
    if (i > 0) return `translate(0,0)`;

    var angle = (d.startAngle + d.endAngle) / 2;
    var xOff = Math.sin(angle) * selectedOffset;
    var yOff = -Math.cos(angle) * selectedOffset;
    return `translate(${(xOff)},${(yOff)})`;
  })
  .attr('class', (d, i) => i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary');

  const arcs = pie(data);
  if (arcs && arcs[0]) {
    var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
    var angleDeg = angle * (180 / Math.PI);

    const line = d3.line();
    const arrowGroup = svgGroup.append('g')
    .classed('nhsd-viz-pie-arrow', true);

    arrowGroup.append("path")
    .attr("d", line([[0,0],[arrowSize * 0.8,-arrowSize],[-arrowSize * 0.8,-arrowSize]]))
    .classed('nhsd-viz-fill-primary', true)
    .attr('transform', `rotate(${angleDeg}) translate(${0},${-(arcRadius + selectedOffset + arrowOffset)})`);
    }
  return svgGroup;
}