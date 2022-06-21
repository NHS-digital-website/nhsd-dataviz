import { VisualisationFullOptions, SeriesData } from "../options";

export interface TableOptions extends VisualisationFullOptions {
  data: VisualisationFullOptions['data'] & SeriesData
}

export default function(vizChart: d3.Selection<HTMLElement, unknown, HTMLElement, any>, options: TableOptions) {
  const table = vizChart.insert('table');

  table.append('thead')
    .append('tr')
    .call(d => {
      let key = 'Key';
      if (options.data.xAxis && options.data.xAxis.title) {
        key = options.data.xAxis.title;
      }
      d.append('th').text(key);
    })
    .call(d => {
      let value = 'Value';
      if (options.data.xAxis && options.data.xAxis.title) {
        value = options.data.yAxis.title;
      }
      d.append('th').text(value);
    })

  table.append('tbody')
    .selectAll('tr')
    .data(options.data.series)
    .enter()
    .append("tr")
    .call(d => {
      d.append('td').text((d: SeriesData['series'][0]) => d.name)
    })
    .call(d => {
      d.append('td').text((d: SeriesData['series'][0]) => d.values[0])
    });

  table.classed('nhsd-viz-sr-only', true)
    .classed('nhsd-viz-body', true);
}
