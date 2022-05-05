export default function (vizWrapper, options) {
  if (options.data) {
    const chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
    .append('div')
    .classed('nhsd-viz-chart-content', true);

    let chartText = '';

    if (options.data.percent) {
        chartText = `${options.data.percent}% of ${options.data.subject}`;
    } else if (options.data.ratio) {
        chartText = `${options.data.ratio.numerator} in ${options.data.ratio.denominator} ${options.data.subject}`;
    } else if (options.data.quantity) {
        chartText = `${options.data.quantity}`;
    }

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body', true)
    .classed('nhsd-viz-lead-paragraph', true)
    .text(chartText);

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body-2', true)
    .classed('nhsd-viz-second-paragraph', true)
    .text(options.data.description);
  }
}