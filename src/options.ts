import config from './config';

export interface VisualisationOptions {
  vizType?: "pie" | "doughnut" | "icon" | "stat" | "column",
  title?: string,
  introText?: string,
  data: (
      {
          description?: string,
          subject?: string,
          change?: {
              percent?: number,
              from?: number,
              date: string
          },
          
      } & (PercentData | RatioData | QuantityData | SeriesData)
  ),
  source?: {
      text: string,
      href?: string,
  },
  desktopViewport?: number,
  fontSize?: string,
};

export interface VisualisationFullOptions extends VisualisationOptions {
  vizType: "pie" | "doughnut" | "icon" | "stat" | "column",
  visualisationId: string,
  desktopViewport: number,
}

export interface PercentData {
  percent: number,
}

export type RatioData = {
  ratio: {
    numerator: number,
    denominator: number,
  }
}

export type QuantityData = {
  quantity: number,
}

export type SeriesData = {
  unit: string,
  yAxis?: {
    title?: string,
    start?: number,
    end?: number,
  },
  xAxis?: {
    title: string,
    groups?: [string],
  }
  series: [{
    name: string,
    values: [number],
  }]
}

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
