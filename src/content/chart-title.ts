
type ChartTitleOptions = {
  visualisationId: string,
  title?: string,
}

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: ChartTitleOptions) {
  if (!options.title) return;
  vizWrapper.select('.nhsd-viz-content')
  .attr('aria-labelledby', `nhsd-viz-${options.visualisationId}-title`)
  .append('h1')
  .attr('id', `nhsd-viz-${options.visualisationId}-title`)
  .classed('nhsd-viz-title', true)
  .text(options.title);
}
