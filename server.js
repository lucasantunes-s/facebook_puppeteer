const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const PORT = 3000;

let search = "Bolsonaro";
let url = `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=${search}&sort_data[direction]=desc&sort_data[mode]=relevancy_monthly_grouped&search_type=keyword_unordered&media_type=all`

app.get("/", (req, res) => {
    res.send("Hello Wolrd");
})


app.get("/face", async (req, res) => {
    
  const browser = await puppeteer.launch( {
    headless: false,
    defaultViewport: false
    
});
    
    const page = await browser.newPage();
  await page.goto(url);

  const addHandles = await page.$$(".xrvj5dj .xdq2opy .xexx8yu .xbxaen2 .x18d9i69 .xbbxn1n .xdoe023 .xbumo9q .x143o31f .x7sq92a .x1crum5w");

  for (const addHandle of addHandles) {
    const singleAdd = await page.evaluate(el => el.innerText, addHandle);

    console.log(singleAdd);
  }
  

    

  res.send("Test");
});




app.listen(PORT, () => {
    console.log("App listen port " + PORT);
})