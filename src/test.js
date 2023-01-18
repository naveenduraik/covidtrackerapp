const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://api.example.com/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('nav');
    await page.waitForSelector('h6');
    
    const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#heading");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://example.com/');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('ul');
      await page.waitForSelector('li');
    const href1 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#blog'),
            a=> a.getAttribute('href')
        )
        );
    const href2 = await page.evaluate(
            ()=> Array.from(
                document.querySelectorAll('a[href]#volunteers'),
                a=> a.getAttribute('href')
            )
            );
    const href3 = await page.evaluate(
        ()=> Array.from(
            document.querySelectorAll('a[href]#about'),
            a=> a.getAttribute('href')
        )
        );
      console.log('TESTCASE:testcase2:success');
    }
    catch(e){
      console.log('TESTCASE:testcase2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('p');
      
      console.log('TESTCASE:testcase3:success');
    }
    catch(e){
      console.log('TESTCASE:testcase3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('section');
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#sec1");
        return heading.innerHTML;
      })
      const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#col-1");
        return heading.innerHTML;
      })
      const result4 = await page.evaluate(()=>{
        let heading = document.querySelector("#col-2");
        return heading.innerHTML;
      })
      console.log('TESTCASE:testcase4:success');
    }
    catch(e){
      console.log('TESTCASE:testcase4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('h4');
      await page.waitForSelector('input');
      await page.waitForSelector('img');
      await page.waitForSelector('map');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myInput");
        return heading.innerHTML;
      })
      console.log('TESTCASE:testcase5:success');
    }
    catch(e){
      console.log('TESTCASE:testcase5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:800,
      })
      
      await page.waitForSelector('table');
      await page.waitForSelector('tr');
      await page.waitForSelector('th');
      await page.waitForSelector('td');
      await page.waitForSelector('footer');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myTable");
        return heading.innerHTML;
      })
     
      console.log('TESTCASE:testcase6:success');
    }
    catch(e){
      console.log('TESTCASE:testcase6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  

