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
import * as palette from './helpers/palette';

const generateId = () => Math.random().toString(16).slice(2);

async function render(selector, options) {
    const visualisationId = generateId();
    options.visualisationId = visualisationId;

    options.vizType = options.vizType || 'pie';

    const target = d3.select(selector).html("");

    chartStyles(target, options);

    const vizWrapper = target.insert('article')
    .attr('id', `nhsd-viz-${visualisationId}`)
    .attr('class', `nhsd-viz`);

    vizWrapper.insert('div')
    .attr('class', `nhsd-viz-content`);

    chartTitle(vizWrapper, options);

    introText(vizWrapper, options);

    vizWrapper.select('.nhsd-viz-content')
        .insert('div')
        .classed('nhsd-viz-chart-content-wrapper', true)
        .insert('div')
        .classed('nhsd-viz-chart', true);

    await vizChart(vizWrapper, options);

    content(vizWrapper, options);
    changeText(vizWrapper, options);
    sourceText(vizWrapper, options);

    return vizWrapper.node();
}

export function chart(selector, options) {
    if (d3.select(selector).empty()) {
        throw new Error(`Selector "${selector}" not found`);
    }
    if (!options) {
        throw new Error("Visualisation options not set");
    }

    window.addEventListener('resize', () => render(selector, options));
    render(selector, options);
}

export { 
    palette
}
