type ChangeTextOptions = {
  data: {
    change?: {
      percent?: number,
      from?: number,
      date: String
    }
  }
}

export default function (vizWrapper: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, options: ChangeTextOptions) {
  if (options.data.change) {
    let changeText = '';

    if (options.data.change.percent >= 0) {
        changeText += `<span class="nhsd-viz-sr-only">Up</span><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="16px" height="16px" x="0" y="0" aria-hidden="true"><path d="M1,7.5L8,1l7,6.5L13.5,9L9,4.8L9,15H7L7,4.8L2.5,9L1,7.5z"></path></svg> `;
    } else {
        changeText += `<span class="nhsd-viz-sr-only">Down</span><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="16px" height="16px" x="0" y="0" aria-hidden="true"><path d="M15,8.5L8,15L1,8.5L2.5,7L7,11.2L7,1l2,0l0,10.2L13.5,7L15,8.5z"></path></svg> `;
    }

    changeText += `${options.data.change.percent}% `;

    if (options.data.change.from !== undefined) {
        changeText += `from ${options.data.change.from} in `;
    } else {
        changeText += 'since '
    }

    changeText += options.data.change.date;

    vizWrapper.select('.nhsd-viz-content')
    .insert('div')
    .classed('nhsd-viz-body', true)
    .classed('nhsd-viz-closing-paragraph', true)
    .html(changeText);
  }
}