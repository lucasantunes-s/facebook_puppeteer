const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const PORT = 3000;
const cheerio = require("cheerio");

let search = "Saca Rolha";
let url = `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=${search}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`


app.get("/teste", async (req, res) => {

//     O código abaixo utiliza o cheerio, busca os dados da pagina e faz um split separando pela palavra AtivoVeiculação. 

//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(url);
//     const htmlContent = await page.content();
//     const jsonOutput = htmlToJson(htmlContent);
//     console.log(jsonOutput);
//     await browser.close();

//     function htmlToJson(html) {
//     const $ = cheerio.load(html);
//     const result = {};
//     page.waitForSelector('.xdoe023');
//     result.title = $('.xdoe023').text();
//     result.headings = [];   
//     result.response  = result.title.split("AtivoVeiculação");

//     console.log(result.response);
// }
    

teste();

 })

 // A função abaixo faz a busca na pagina usando somente o puppeteer, e no momento ela esta sendo chamada na rota a cima.
  async function teste() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const divElement = await page.$('.xdoe023');
  

  if (divElement) {
    console.log(divElement);
    console.log(await page.evaluate(div => div.textContent, divElement));
  } else {
    console.log('Div element not found.');
  }

  await browser.close();
};






app.listen(PORT, () => {
    console.log("App listen port " + PORT);
})