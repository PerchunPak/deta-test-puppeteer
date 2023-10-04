import puppeteer from 'puppeteer';


export async function GET() {
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto('https://perchun.it/', {waitUntil: 'networkidle2'});
  await page.setViewport({width: 1080, height: 600});
  const screenshot = await page.screenshot({fullPage: true, encoding: 'base64'});
  await browser.close();

  return new Response('data:image/png;base64,' + screenshot)
}
