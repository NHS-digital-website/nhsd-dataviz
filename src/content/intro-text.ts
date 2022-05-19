type IntroTextOptions = {
  introText?: string,
}

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: IntroTextOptions) {
  if (!options.introText) return;

  vizWrapper.select('.nhsd-viz-content')
  .append('div')
  .classed('nhsd-viz-body', true)
  .classed('nhsd-viz-intro-text', true)
  .text(options.introText);
}
