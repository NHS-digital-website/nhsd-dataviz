const path = require('path');
const merge = require('lodash.merge');
const playwright = require('playwright-aws-lambda');

module.exports = async function exportViz(data = {}, library = 'nhsd-dataviz') {
  const browser = await playwright.launchChromium({
    headless: true,
  });

  if (!data) throw new Error("Visualisation options not set");
  if (!data.format) {
    data.format = "jpg";
  }

  const page = await browser.newPage();
  page.setViewportSize({
    width: 1060,
    height: 768,
  });

  if (library == 'highcharts') {
    data = merge(data, {
      plotOptions: {
        series: {
          animation: false,
        }
      }
    });

    await page.goto(`file://${path.join(__dirname, 'highcharts.html')}`);
  } else {
    await page.goto(`file://${path.join(__dirname, 'template.html')}`);
  }

  const error = await page.evaluate(async ([chartData, chartLibrary]) => {
    try {
      if (chartLibrary == 'highcharts') {
        await Highcharts.chart('viz', chartData);
      } else {
        await nhsdviz.chart('#viz', chartData);
      }
    } catch(e) {
      return e.message;
    }
  }, [data, library]);

  if (error) {
    await browser.close();
    throw new Error(error);
  }

  let fileInfo = {};
  let buffer;
  let element;
  switch(data.format) {
    case 'png':
      element = await page.$('#viz');
      buffer = await element.screenshot();
      fileInfo = {
        contentType: 'image/png',
        buffer,
      };
      break;
    case 'jpg':
      element = await page.$('#viz');
      buffer = await element.screenshot();
      fileInfo = {
        contentType: 'image/jpeg',
        buffer,
      };
      break;
    default:
      element = await page.$('#viz');
      const outerHtmlProp = await element.getProperty('innerHTML');
      buffer = await outerHtmlProp.jsonValue();
      fileInfo = {
        contentType: 'text/html',
        buffer,
      };
  }

  await browser.close();

  return fileInfo;
}
