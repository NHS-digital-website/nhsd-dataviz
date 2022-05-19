import * as d3 from "d3";
import isMobile from "../../helpers/is-mobile";
import { VisualisationFullOptions } from "../../visualisations";

export interface IconOptions extends VisualisationFullOptions {
  vizType: "icon",
  data: VisualisationFullOptions['data'] & {
    ratio: {
      numerator: number,
      denominator: number,
    }
  },
  desktopViewport: number,
  icon?: string,
}

export default async function(vizChart: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: IconOptions) {
  if (!options.data || !options.data.ratio || !options.data.ratio.numerator || !options.data.ratio.denominator) return;

  const {numerator, denominator} = options.data.ratio;

  let itemsPerRow = 10;
  if (isMobile(options.desktopViewport)) {
    itemsPerRow = 5;
    if (denominator % 5 != 0) {
      if (denominator % 6 == 0) {
        itemsPerRow = 6;
      } else if (denominator % 4 == 0) {
        itemsPerRow = 4;
      }
    }
  } else if (denominator % 10 != 0) {
    if (denominator % 13 == 0) {
      itemsPerRow = 7;
    } else if (denominator % 12 == 0) {
      itemsPerRow = 12;
    } else if (denominator % 8 == 0) {
      itemsPerRow = 8;
    } else if (denominator % 6 == 0) {
      itemsPerRow = 6;
    } else if (denominator % 5 == 0) {
      itemsPerRow = 5;
    }
  }

  let iconImg = null;
  if (options.icon) {
    try {
      iconImg = await d3.image(options.icon);
    } catch(e) {
      console.error(e);
      iconImg = null;
    }
  }

  const iconWrapper = vizChart.insert('div')
  .attr('aria-hidden', true)
  .classed('nhsd-viz-icon-list', true);

  for (let i=0; i<denominator; i++) {
    const icon = iconWrapper.append('div')
    .classed('nhsd-viz-icon-wrapper', true)
    .style('width', `${100 / itemsPerRow}%`)
    .append('div')
    .classed('nhsd-viz-icon', true)
    .classed('nhsd-viz-icon--inactive', i >= numerator);

    if (options.icon && iconImg) {
      icon.insert('img')
      .attr('src', iconImg.src);
    } else {
      icon.insert('div')
      .classed('nhsd-viz-default-icon', true);
    }

    const fraction = numerator - i;
    if (fraction < 1 && fraction > 0) {
      icon.insert('div')
      .classed('nhsd-viz-icon-mask', true)
      .style('left', `${fraction * 100}%`)
    }
  }
}
