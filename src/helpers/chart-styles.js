import config from "../config";
import { getPalette } from './palette';

export default function(target, options) {
  const palette = getPalette(options.palette);

  target.insert('style')
  .html(`
    #nhsd-viz-${options.visualisationId} {
      position: relative;
      background: ${palette.background};
      font-size: 18px;
      text-align: center;
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
      font-size: 2em;
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
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-chart-content {
      max-width: 26em;
      width: 50%;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-lead-paragraph {
      font-size: 3.2em;
      line-height: 1em;
      font-weight: bold;
      margin-bottom: 0.1em;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-second-paragraph {
      font-size: 1.8em;
      line-height: 1em;
      font-weight: bold;
    }

    #nhsd-viz-${options.visualisationId} .nhsd-viz-closing-paragraph {
      display: flex;
      margin-top: 0.6em;
      font-weight: bold;
      font-size: 1.4em;
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
  
  if (options.vizType == 'pie') {
    target.insert('style').html(`
      #nhsd-viz-${options.visualisationId} .nhsd-viz-pie .nhsd-viz-pie-arcs path {
        stroke: ${palette.background};
        stroke-width: 4;
      }

      #nhsd-viz-${options.visualisationId} .nhsd-viz-pie .nhsd-viz-pie-arrow path {
        stroke-width: 0;
      }
    `);
  }
}