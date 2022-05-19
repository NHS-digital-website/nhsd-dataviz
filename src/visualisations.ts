import "core-js/stable";
import "regenerator-runtime/runtime"

import * as d3 from "d3";
import chartStyles from './helpers/chart-styles';
import chartTitle from './content/chart-title';
import content from './content/chart-content';
import changeText from './content/change-text';
import sourceText from './content/source-text';
import introText from "./content/intro-text";
import vizChart from "./visualisations/chart";
import { createPalette } from './helpers/palette';
import debounce from './helpers/debounce';
import optionDefaults from './helpers/option-defaults';

export interface VisualisationOptions {
    vizType?: "pie" | "doughnut" | "icon",
    title?: string,
    introText?: string,
    data: {
        description?: string,
        quantity?: number,
        subject?: string,
        change?: {
            percent?: number,
            from?: number,
            date: string
        },
        percent?: number,
        ratio?: {
            numerator: number,
            denominator: number,
        }
    } & ({
        percent: number
    } | {
        ratio: {
            numerator: number,
            denominator: number,
        }
    }),
    source?: {
        text: string,
        href?: string,
    },
    desktopViewport?: number,
};

export interface VisualisationFullOptions extends VisualisationOptions {
    vizType: "pie" | "doughnut" | "icon",
    visualisationId: string,
    fontSize?: string,
    desktopViewport: number
}
  
async function render(selector: string, options: VisualisationOptions) {
    const fullOptions = optionDefaults(options);

    const target = d3.select(selector).html("");

    chartStyles(target, fullOptions);

    const vizWrapper = target.insert('article')
    .attr('id', `nhsd-viz-${fullOptions.visualisationId}`)
    .attr('class', `nhsd-viz`);

    vizWrapper.insert('div')
    .attr('class', `nhsd-viz-content`);

    chartTitle(vizWrapper, fullOptions);

    introText(vizWrapper, fullOptions);

    vizWrapper.select('.nhsd-viz-content')
        .insert('div')
        .classed('nhsd-viz-chart-content-wrapper', true)
        .insert('div')
        .classed('nhsd-viz-chart', true)
        .attr('aria-hidden', true);

    await vizChart(vizWrapper, fullOptions);

    content(vizWrapper, fullOptions);
    changeText(vizWrapper, fullOptions);
    sourceText(vizWrapper, fullOptions);

    return vizWrapper.node();
}

export async function chart(selector: string, options: VisualisationOptions) {
    if (d3.select(selector).empty()) {
        throw new Error(`Selector "${selector}" not found`);
    }
    if (!options) {
        throw new Error("Visualisation options not set");
    }

    const debouncedRender = debounce(() => render(selector, options), 250)
    window.addEventListener('resize', debouncedRender);
    await render(selector, options);
}

export {
    createPalette
}
