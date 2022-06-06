import { VisualisationFullOptions } from '../options';

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: VisualisationFullOptions) {
  if (options.data) {
    let chartHeadline = '';
    let chartDesc = options.data.description;

    if ("percent" in options.data) {
      if (options.vizType != 'doughnut') {
        chartHeadline = `${options.data.percent}%`;
      }
      chartHeadline += ` of ${options.data.subject}`;
    } else if ("ratio" in options.data) {
      chartHeadline = `${options.data.ratio.numerator} in ${options.data.ratio.denominator} ${options.data.subject}`;
    } else if ("quantity" in options.data) {
      chartHeadline = `${options.data.quantity.toLocaleString('en-gb')}`;
      chartDesc = `${options.data.subject} ${options.data.description}`;
    }

    if (!chartHeadline && !chartDesc) return;

    const chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
    .append('div')
    .classed('nhsd-viz-chart-content', true);

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