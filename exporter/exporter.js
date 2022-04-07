const path = require('path');
const { v4: uuid } = require('uuid');
const playwright = require('playwright-aws-lambda');

module.exports = async function exportViz(data = {}) {
  const browser = await playwright.launchChromium({
    headless: false,
  });

  if (!data) throw new Error("Visualisation options not set");
  if (!data.format) throw new Error("Export format not set");

  const vizType = data.vizType || 'xiny';

  const page = await browser.newPage();
  await page.goto(`file://${path.join(__dirname, 'template.html')}`);

  const error = await page.evaluate(async ([vizType, data]) => {
    try {
      await nhsdViz('#viz', vizType, data);
    } catch(e) {
      return e.message;
    }
  }, [vizType, data.data]);

  if (error) {
    throw new Error(error);
  }

  const element = await page.$('#viz');

  let fileInfo = {};
  let buffer;
  switch(data.format) {
    case 'png':
      buffer = await element.screenshot();
      fileInfo = {
        file: uuid() + '.png',
        contentType: 'image/png',
        buffer,
      };
      break;
    case 'jpg':
      buffer = await element.screenshot();
      fileInfo = {
        file: uuid() + '.jpg',
        contentType: 'image/jpeg',
        buffer,
      };
      break;
    default:
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
