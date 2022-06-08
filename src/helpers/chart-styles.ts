import * as d3 from "d3";
import config from "../config";
import { getPalette, Palette } from './palette';
import { VisualisationOptions } from '../options';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

interface StyleOptions extends VisualisationOptions {
  visualisationId: string,
  palette?: (Palette & {basePalette?: string}),
  fontSize?: string,
  desktopViewport: number
}

export default function(target: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: StyleOptions) {
  const palette = getPalette(options.palette);

  const sheet = jss.createStyleSheet({
    '@global': {
      [`#nhsd-viz-${options.visualisationId}`]: {
        position: 'relative',
        background: palette.background,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        fontSize: `${options.fontSize || "1em"}`,

        ['& .nhsd-viz-sr-only']: {
          position: 'absolute!important',
          width: '1px!important',
          height: '1px!important',
          padding: '0!important',
          margin: '-1px!important',
          overflow: 'hidden!important',
          clip: 'rect(0,0,0,0)!important',
          whiteSpace: 'nowrap!important',
          border: '0!important',
        },

        ['& .nhsd-viz-content']: {
          padding: config.padding,
          width: '100%',
        },

        ['& .nhsd-viz-fill-primary']: {
          fill: palette.primary,
        },

        ['& .nhsd-viz-fill-secondary']: {
          fill: palette.secondary,
        },

        ['& .nhsd-viz-title']: {
          fontSize: '2.6em',
          margin: 0,
          marginBottom: '0.2em',
          color: palette.text,
          textAlign: 'center',
          textTransform: 'uppercase',
          textDecoration: 'underline',
        },

        ['& .nhsd-viz-body, & .nhsd-viz-body svg']: {
          color: palette.text,
          fill: palette.text,
        },

        ['& .nhsd-viz-body-2, & .nhsd-viz-body-2 svg']: {
          color: palette.text2,
          fill: palette.text2,
        },

        '& .nhsd-viz-intro-text': {
          fontSize: '2.2em',
          lineHeight: '1.2em',
          fontWeight: 'bold',
          marginBottom: '0.7em',
        },

        '& .nhsd-viz-chart-content-wrapper': {
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.2em',
          textAlign: 'left',
        },

        '& .nhsd-viz-chart': {
          maxWidth: '20em',
          width: '50%',

          '& svg': {
            fontFamily: 'inherit',

            '& g': {
              fontFamily: 'inherit',
            }
          }
        },

        '& .nhsd-viz-chart-content': {
          maxWidth: '26em',
          width: '50%',
        },

        '& .nhsd-viz-lead-paragraph': {
          fontSize: '3.6em',
          lineHeight: '1em',
          fontWeight: 'bold',
          marginBottom: '0.1em',
        },

        '& .nhsd-viz-second-paragraph': {
          fontSize: '2em',
          lineHeight: '1em',
          fontWeight: 'bold',
        },

        '& .nhsd-viz-closing-paragraph': {
          display: 'flex',
          marginTop: '1em',
          fontWeight: 'bold',
          fontSize: '1.5em',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5em',
        },

        '& .nhsd-viz-closing-paragraph svg': {
          width: '1em',
          height: '1em',
        },

        '& .nhsd-viz-source-text': {
          fontSize: '0.8em',
          textAlign: 'right',
          position: 'absolute',
          right: '0.8em',
          bottom: '0.6em',
        }
      },

      [`@media (max-width: ${options.desktopViewport}px)`]: {
        [`#nhsd-viz-${options.visualisationId}`]: {
          fontSize: '0.8em',

          '& .nhsd-viz-chart-content-wrapper': {
            textAlign: 'center',
            flexDirection: 'column',
            gap: '1.5em',
          },

          '& .nhsd-viz-chart': {
            width: '100%',
          },

          '& .nhsd-viz-chart-content': {
            maxWidth: '100%',
            width: '100%',
          },

          '& .nhsd-viz-lead-paragraph': {
            fontSize: '3em',
          }
        }
      }
    }
  });
  target.insert('style').html(sheet.toString());

  if (options.vizType == 'pie' || options.vizType == 'doughnut') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          ['& .nhsd-viz-pie, & .nhsd-viz-doughnut']: {
            transform: 'scale(1.08)',
          },

          ['& .nhsd-viz-pie .nhsd-viz-pie-arcs path, & .nhsd-viz-doughnut .nhsd-viz-doughnut-arcs path']: {
            stroke: palette.background,
            strokeWidth: 4,
          },

          ['& .nhsd-viz-pie .nhsd-viz-pie-arrow path, & .nhsd-viz-doughnut .nhsd-viz-doughnut-arrow path']: {
            strokeWidth: 0,
          }
        }
      }
    });

    target.insert('style').html(sheet.toString());
  }

  if (options.vizType == 'doughnut') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          ['& .nhsd-viz-chart-content-wrapper']: {
            gap: '1em',
          },

          '& .nhsd-viz-chart': {
            position: 'relative',
            minWidth: '14.5em',

          },

          '& .nhsd-viz-chart .nhsd-viz-doughnut-percentage': {
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '4.8em',
            fontWeight: 'bold',
          }
        }
      }
    });

    target.insert('style').html(sheet.toString());
  }

  if (options.vizType == 'icon' || options.vizType == 'stat' || options.vizType == 'column') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          '& .nhsd-viz-chart-content-wrapper': {
            flexDirection: 'column',
            gap: '1.5em',
          },

          '& .nhsd-viz-chart, & .nhsd-viz-chart-content': {
            maxWidth: '40em',
            width: '100%',
          },

          '& .nhsd-viz-chart-content': {
            textAlign: 'center',
          }
        }
      }
    });

    target.insert('style').html(sheet.toString());
  }

  if (options.vizType == 'icon') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          '& .nhsd-viz-icon-list': {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
          '& .nhsd-viz-icon-wrapper': {
            position: 'relative',

            '&:before': {
              content: '""',
              display: 'block',
              width: '100%',
              paddingTop: '100%',
            },
          },
          '& .nhsd-viz-icon': {
            position: 'absolute',
            top: '6%',
            left: '6%',
            right: '6%',
            bottom: '6%',

            '& .nhsd-viz-default-icon, & img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
            '& .nhsd-viz-default-icon': {
              borderRadius: '5%',
              background: palette.primary,
            },
            '& .nhsd-viz-icon-mask': {
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              background: palette.background,
              opacity: 0.8,
            }
          },
          '& .nhsd-viz-icon--inactive': {
            opacity: 0.2,
          },
        },
        [`@media (max-width: ${options.desktopViewport}px)`]: {
          [`#nhsd-viz-${options.visualisationId}`]: {
            '& .nhsd-viz-chart': {
              maxWidth: '28em',
            }
          }
        }
      }
    });

    target.insert('style').html(sheet.toString());
  }

  if (options.vizType == 'stat') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          '& .nhsd-viz-chart-content-wrapper': {
            margin: '0.8em 0',
          }
        }
      }
    });

    target.insert('style').html(sheet.toString());
  }

  if (options.vizType == 'column') {
    const sheet = jss.createStyleSheet({
      '@global': {
        [`#nhsd-viz-${options.visualisationId}`]: {
          '& .nhsd-viz-intro-text': {
            'marginBottom': '1em',
            'fontSize': '2em'
          },
          '& .nhsd-viz-chart': {
            'max-width': '100%',
            '& .nhsd-viz-column-xaxis, & .nhsd-viz-column-yaxis': {
              'font-size': '1.2em',
            },
            '& .nhsd-viz-column-xaxis-label, & .nhsd-viz-column-yaxis-label': {
              'font-size': '1.4em',
              'font-weight': 'bold',
            }
          }
        },
        [`@media (max-width: ${options.desktopViewport}px)`]: {
          [`#nhsd-viz-${options.visualisationId}`]: {
            '& .nhsd-viz-intro-text': {
              'fontSize': '1.6em'
            }
          }
        },
      }
    });

    target.insert('style').html(sheet.toString());
  }
}