import { VisualisationFullOptions } from '../visualisations';

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: VisualisationFullOptions) {
  if (options.data) {
    const chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
    .append('div')
    .classed('nhsd-viz-chart-content', true);

    let chartText = '';
    if (options.data.percent) {
      if (options.vizType == 'doughnut') {
        chartText = `<span class="nhsd-viz-sr-only">${options.data.percent}%</span>`;
      } else {
        chartText = `${options.data.percent}%`;
      }
      chartText += ` of ${options.data.subject}`;
    } else if (options.data.ratio) {
        chartText = `${options.data.ratio.numerator} in ${options.data.ratio.denominator} ${options.data.subject}`;
    } else if (options.data.quantity) {
        chartText = `${options.data.quantity}`;
    }

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body', true)
    .classed('nhsd-viz-lead-paragraph', true)
    .html(chartText);

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body-2', true)
    .classed('nhsd-viz-second-paragraph', true)
    .text(options.data.description);
  }
}