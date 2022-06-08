import pie, { PieOptions } from './charts/pie';
import doughnut, { DoughnutOptions } from './charts/doughnut';
import icon, { IconOptions }  from './charts/icon';
import column, { ColumnOptions }  from './charts/column';
import { VisualisationFullOptions } from "../options";

const isDoughnut = (options: VisualisationFullOptions): options is DoughnutOptions => options.vizType == 'doughnut';
const isIcon = (options: VisualisationFullOptions): options is IconOptions => options.vizType == 'icon';
const isPie = (options: VisualisationFullOptions): options is PieOptions => options.vizType == 'pie';
const isColumn = (options: VisualisationFullOptions): options is ColumnOptions => options.vizType == 'column';

export default async function (vizWrapper: d3.Selection<HTMLElement, unknown, HTMLElement, any>, options: VisualisationFullOptions) {
  if (!isDoughnut(options) && !isIcon(options) && !isPie(options) && !isColumn(options)) return;

  const vizChart = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
  .insert('div')
  .classed('nhsd-viz-chart', true);

  try {
    if (isDoughnut(options)) {
      await doughnut(vizChart, options);
    } else if (isIcon(options)) {
      await icon(vizChart, options);
    } else if (isPie(options)) {
      await pie(vizChart, options);
    } else if (isColumn(options)) {
      await column(vizChart, options);
    }
  } catch (e) {
    console.error(e);
  }
}


