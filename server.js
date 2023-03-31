const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const PORT = 3000;

let search = "Jair Messias Bolsonaro";
let url = `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=${search}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`

app.get("/", (req, res) => {
    res.send("Hello Wolrd");
})


app.get("/face", async (req, res) => {
  

  const puppeteer = require('puppeteer');

  
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    page.waitForSelector("text/usam esse criativo e esse texto");
    const text = await page.$eval("text/usam esse criativo e esse texto", element => element.innerHTML);
    console.log(text);

    ;
   
  
    
    
    
 
  
})

app.listen(PORT, () => {
    console.log("App listen port " + PORT);
})