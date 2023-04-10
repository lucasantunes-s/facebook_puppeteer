const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const PORT = 3000;
const cheerio = require("cheerio");

let search = "Saca Rolha";
let url = `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=${search}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`

// app.get("/", async (req, res) => {
//     res.send("Hello Wolrd");
    
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(url);
    
//     const html = await page.content();
//     const jsonOutput = htmlToJson(html);
  
//     console.log(jsonOutput);
//     await browser.close();
    
//     function htmlToJson(htmlContent) {
//         const $ = cheerio.load(htmlContent);
//         const result = {};
//         // Coloque aqui a lógica de extração de informações do HTML e popule o objeto result.
//         // Exemplo:
//         result.title = $('title').text();
//         result.headings = [];
//         $('h1, h2, h3, h4, h5, h6').each(function (index, element) {
//         result.headings.push({
//             type: $(element).prop('tagName'),
//             text: $(element).text()
//     });
//   });
//   return result;
// }

// console.log(htmlToJson(html));
    
// })


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
    // Coloque aqui a lógica de extração de informações do HTML e popule o objeto result.
    // Exemplo:
    page.waitForSelector('.xdoe023');
    result.title = $('.xdoe023').text();
    result.headings = [];
    

  //  $('._7jvw .x2izyaf .x1hq5gj4 .x1d52u69').each(function (index, element) {
  //     result.headings.push({
  //     type: $(element).prop('tagName'),
  //     text: $(element).text()
  //   });
  // });

  return result;
}

})









// app.get("/face", async (req, res) => {
  

//   const puppeteer = require('puppeteer');

  
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(url);

//     page.waitForSelector("text/usam esse criativo e esse texto");
//     const element = await page.$$eval("text/usam esse criativo e esse texto", element => element.map(element => element.innerHTML))
//     console.log(element);

//     element.forEach(element => console.log(element.textContent));;

//     ;
  
// })

app.listen(PORT, () => {
    console.log("App listen port " + PORT);
})