const path = require('path');
const { v4: uuid } = require('uuid');
const playwright = require('playwright-aws-lambda');

module.exports = async function exportViz(data = {}) {
  const browser = await playwright.launchChromium({
    headless: false,
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
  await page.goto(`file://${path.join(__dirname, 'template.html')}`);

  const error = await page.evaluate(async ([chartData]) => {
    try {
      await nhsdviz.chart('#viz', chartData);
    } catch(e) {
      return e.message;
    }
  }, [data]);

  if (error) {
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
        file: uuid() + '.png',
        contentType: 'image/png',
        buffer,
      };
      break;
    case 'jpg':
      element = await page.$('#viz');
      buffer = await element.screenshot();
      fileInfo = {
        file: uuid() + '.jpg',
        contentType: 'image/jpeg',
        buffer,
      };
      break;
    default:
      element = await page.$('#viz');
      const outerHtmlProp = await element.getProperty('innerHTML');
      buffer = await outerHtmlProp.jsonValue();
      fileInfo = {
        file: uuid() + '.html',
        contentType: 'text/html',
        buffer,
      };
  }

  await browser.close();

  return fileInfo;
}
