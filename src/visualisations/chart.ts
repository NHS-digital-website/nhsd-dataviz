import pie, { PieOptions } from './charts/pie';
import doughnut, { DoughnutOptions } from './charts/doughnut';
import icon, { IconOptions }  from './charts/icon';
import { VisualisationFullOptions } from "../visualisations";

export default async function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: VisualisationFullOptions) {
  const vizChart = vizWrapper.select('.nhsd-viz-chart');

  const isDoughnut = (options: VisualisationFullOptions): options is DoughnutOptions => options.vizType == 'doughnut';
  const isIcon = (options: VisualisationFullOptions): options is IconOptions => options.vizType == 'icon';
  const isPie = (options: VisualisationFullOptions): options is PieOptions => options.vizType == 'pie';

  try {
    if (isDoughnut(options)) {
      await doughnut(vizChart, options);
    } else if (isIcon(options)) {
      await icon(vizChart, options);
    } else if (isPie(options)) {
      await pie(vizChart, options);
    }
  } catch (e) {
    console.error(e);
  }
}


