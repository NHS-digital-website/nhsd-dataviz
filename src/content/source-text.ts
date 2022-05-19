type SourceText = {
  source?: {
    text: string,
    href?: string,
  }
}

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: SourceText) {
  if (options.source && options.source.text) {
    const element = vizWrapper.append('div')
    .classed('nhsd-viz-body-2', true)
    .classed('nhsd-viz-source-text', true)
    .text('Source: ');

    if (options.source.href) {
        element.append('a')
        .attr('href', options.source.href)
        .text(options.source.text);
    } else {
        element.append('span')
        .text(options.source.text);
    }
  }
}
