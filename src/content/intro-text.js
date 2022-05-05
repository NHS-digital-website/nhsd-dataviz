export default function (vizWrapper, options) {
  if (options.data && options.data.date) {
    vizWrapper.select('.nhsd-viz-content')
    .append('div')
    .classed('nhsd-viz-body', true)
    .classed('nhsd-viz-intro-text', true)
    .text(`In ${options.data.date}`);
  }
}