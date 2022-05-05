export default function (vizWrapper, options) {
  if (options.title) {
    vizWrapper.select('.nhsd-viz-content')
    .attr('aria-labelledby', `nhsd-viz-${options.visualisationId}-title`)
    .append('h1')
    .attr('id', `nhsd-viz-${options.visualisationId}-title`)
    .classed('nhsd-viz-title', true)
    .text(options.title);
  }
}