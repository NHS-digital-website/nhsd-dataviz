import { VisualisationFullOptions } from '../visualisations';

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: VisualisationFullOptions) {
  if (options.data) {
    const chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
    .append('div')
    .classed('nhsd-viz-chart-content', true);

    let chartHeadline = '';
    let chartDesc = options.data.description;

    if (options.data.percent) {
      if (options.vizType == 'doughnut') {
        chartHeadline = `<span class="nhsd-viz-sr-only">${options.data.percent}%</span>`;
      } else {
        chartHeadline = `${options.data.percent}%`;
      }
      chartHeadline += ` of ${options.data.subject}`;
    } else if (options.data.ratio) {
      chartHeadline = `${options.data.ratio.numerator} in ${options.data.ratio.denominator} ${options.data.subject}`;
    } else if (options.data.quantity) {
      chartHeadline = `${options.data.quantity.toLocaleString('en-gb')}`;
      chartDesc = `${options.data.subject} ${options.data.description}`;
    }

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body', true)
    .classed('nhsd-viz-lead-paragraph', true)
    .html(chartHeadline);

    chartTextWrapper.append('div')
    .classed('nhsd-viz-body-2', true)
    .classed('nhsd-viz-second-paragraph', true)
    .text(chartDesc);
  }
}