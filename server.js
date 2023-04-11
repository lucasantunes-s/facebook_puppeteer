const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const PORT = 3000;
const cheerio = require("cheerio");

let search = "Saca Rolha";
let url = `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=${search}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`


app.get("/teste", async (req, res) => {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    const htmlContent = await page.content();
  
    const jsonOutput = htmlToJson(htmlContent);
    console.log(jsonOutput);
    //await browser.close();


    function htmlToJson(html) {
    const $ = cheerio.load(html);
    const result = {};
    
    page.waitForSelector('.xdoe023');
    result.title = $('.xdoe023').text();
    result.headings = [];
    
    result.response  = result.title.split("AtivoVeiculação");

  console.log(result.response);
}

})





app.listen(PORT, () => {
    console.log("App listen port " + PORT);
})