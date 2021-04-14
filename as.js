const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch( {headless : false });
    const page = await browser.newPage();

  await page.goto("https://www.imdb.com/title/tt0111161", { waitUntil: 'networkidle2' });
 
  let data = await page.evaluate(() => {

    let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
    let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
    let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
   
    return {
      title,
      rating,
      ratingCount
    }

  });
  
  console.log(data);

  //await browser.close();

})();