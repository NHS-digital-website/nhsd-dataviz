import { VisualisationOptions, VisualisationFullOptions } from '../visualisations';

const generateId = () => Math.random().toString(16).slice(2);

export default function(options: VisualisationOptions): VisualisationFullOptions {  
  const visualisationId = generateId();
  const vizType = options.vizType || 'pie';

  const fullOptions: VisualisationFullOptions = { 
    ...options,
    visualisationId,
    vizType,
  };

  return fullOptions;
}
