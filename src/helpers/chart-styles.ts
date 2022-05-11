import * as d3 from "d3";
import config from "../config";
import { getPalette, Palette } from './palette';
import { VisualisationOptions } from '../visualisations';

interface StyleOptions extends VisualisationOptions {
  visualisationId: string,
  palette?: (Palette & {basePalette?: string}),
  fontSize?: string,
  desktopViewport?: string
}

export default function(target: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: StyleOptions) {
  const palette = getPalette(options.palette);

  target.insert('style')
  .html(`
    #nhsd-viz-${options.visualisationId} {
      position: relative;
      background: ${palette.background};
      font-size: ${options.fontSize || "16px"};
      text-align: center;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-sr-only {
      position:absolute!important;
      width:1px!important;
      height:1px!important;
      padding:0!important;
      margin:-1px!important;
      overflow:hidden!important;
      clip:rect(0,0,0,0)!important;
      white-space:nowrap!important;
      border:0!important
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-content {
      padding: ${config.padding};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-fill-primary,
    #nhsd-viz-${options.visualisationId} .nhsd-viz-fill-primary {
      fill: ${palette.primary};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-fill-secondary {
      fill: ${palette.secondary};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-title {
      font-size: 2.6em;
      margin: 0;
      margin-bottom: 0.2em;
      color: ${palette.text};
      text-align: center;
      text-transform: uppercase;
      text-decoration: underline;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-body,
    #nhsd-viz-${options.visualisationId} .nhsd-viz-body svg {
      color: ${palette.text};
      fill: ${palette.text};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-body-2,
    #nhsd-viz-${options.visualisationId} .nhsd-viz-body-2 svg {
      color: ${palette.text2};
      fill: ${palette.text2};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-intro-text {
      font-size: 2.2em;
      line-height: 1.2em;
      font-weight: bold;
      margin-bottom: 0.4em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content-wrapper {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      gap: 2.2em;
      text-align: left;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart {
      max-width: 20em;
      width: 50%;
      padding: 0.5em 0;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content {
      max-width: 26em;
      width: 50%;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-lead-paragraph {
      font-size: 3.6em;
      line-height: 1em;
      font-weight: bold;
      margin-bottom: 0.1em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-second-paragraph {
      font-size: 2em;
      line-height: 1em;
      font-weight: bold;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-closing-paragraph {
      display: flex;
      margin-top: 0.7em;
      font-weight: bold;
      font-size: 1.5em;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-closing-paragraph svg {
      width: 1em;
      height: 1em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-source-text {
      font-size: 0.8em;
      text-align: right;
      position: absolute;
      right: 0.8em;
      bottom: 0.6em;
    }

    @media (max-width: ${options.desktopViewport || config.desktopViewport}) {
      #nhsd-viz-${options.visualisationId} {
        font-size: 0.8em;
      }
      
      #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content-wrapper {
        text-align: center;
        flex-direction: column;
        gap: 1.5em;
      }

      #nhsd-viz-${options.visualisationId} .nhsd-viz-chart {
        width: 100%;
      }
  
      #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content {
        max-width: 100%;
        width: 100%;
      }

      #nhsd-viz-${options.visualisationId} .nhsd-viz-lead-paragraph {
        font-size: 3em;
      }
    }
  `);
  
  if (options.vizType == 'pie' || options.vizType == 'doughnut') {
    target.insert('style').html(`
      #nhsd-viz-${options.visualisationId} .nhsd-viz-pie,
      #nhsd-viz-${options.visualisationId} .nhsd-viz-doughnut {
        transform: scale(1.06);
      }

      #nhsd-viz-${options.visualisationId} .nhsd-viz-pie .nhsd-viz-pie-arcs path,
      #nhsd-viz-${options.visualisationId} .nhsd-viz-doughnut .nhsd-viz-doughnut-arcs path {
        stroke: ${palette.background};
        stroke-width: 4;
      }

      #nhsd-viz-${options.visualisationId} .nhsd-viz-pie .nhsd-viz-pie-arrow path,
      #nhsd-viz-${options.visualisationId} .nhsd-viz-doughnut .nhsd-viz-doughnut-arrow path {
        stroke-width: 0;
      }
    `);
  }

  if (options.vizType == 'doughnut') {
    target.insert('style').html(`
    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content-wrapper {
      gap: 1em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart {
      position: relative;
    }
    
    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart .nhsd-viz-doughnut-percentage {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4.8em;
      font-weight: bold;
    }
    `);
  }

  if (options.vizType == 'icon') {
    target.insert('style').html(`
    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content-wrapper {
      flex-direction: column;
      gap: 1.5em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart,
    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content {
      max-width: 40em;
      width: 100%;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content {
      text-align: center;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon-wrapper {
      position: relative;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon-wrapper:before{
      content: '';
      display: block;
      width: 100%;
      padding-top: 100%;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon {
      position: absolute;
      top: 6%;
      left: 6%;
      right: 6%;
      bottom: 6%;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon--inactive {
      opacity: 0.2;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon .nhsd-viz-default-icon,
    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon .nhsd-viz-default-icon {
      border-radius: 5%;
      background: ${palette.primary};
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-icon .nhsd-viz-icon-mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: ${palette.background};
      opacity: 0.8;
    }

    @media (max-width: ${options.desktopViewport || config.desktopViewport}) {
      #nhsd-viz-${options.visualisationId} .nhsd-viz-chart {
        max-width: 28em;
      }
    }
    `);
  }
}