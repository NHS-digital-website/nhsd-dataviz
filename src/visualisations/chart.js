import pie from './charts/pie';

export default async function (vizWrapper, options) {
  const width = options.width || 300;

  const svg = vizWrapper.select('.nhsd-viz-chart')
  .insert('svg')
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('preserveAspectRatio','xMidYMid meet')
  .attr('aria-hidden', true)
  .style('width', '100%');

  if (options.vizType == 'pie') {
      try {
          await pie(svg, { ...options, width });
          svg.attr("viewBox", [0, 0, width, width]);
      } catch (e) {
          console.error(e);
      }
  }
}