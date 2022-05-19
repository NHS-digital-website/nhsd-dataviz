import { VisualisationOptions, VisualisationFullOptions } from '../visualisations';
import config from '../config';

const generateId = () => Math.random().toString(16).slice(2);

export default function(options: VisualisationOptions): VisualisationFullOptions {  
  const visualisationId = generateId();
  const vizType = options.vizType || 'pie';
  const desktopViewport = options.desktopViewport || config.desktopViewport;

  const fullOptions: VisualisationFullOptions = { 
    ...options,
    visualisationId,
    vizType,
    desktopViewport,
  };

  return fullOptions;
}
