const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('http://localhost:4200');
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
      await page.goto('http://localhost:4200');
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
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
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
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('p');
      
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
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('section');
      await page.waitForSelector('h1');
      
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
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#sec1");
        return heading.innerHTML;
      })
      const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#maps");
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


  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('h4');
      await page.waitForSelector('input');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myInput");
        return heading.innerHTML;
      })
      console.log('TESTCASE:testcase7:success');
    }
    catch(e){
      console.log('TESTCASE:testcase7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('img');
      await page.waitForSelector('map');
      console.log('TESTCASE:testcase8:success');
    }
    catch(e){
      console.log('TESTCASE:testcase8:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      
      await page.waitForSelector('table');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myTable");
        return heading.innerHTML;
      })
     
      console.log('TESTCASE:testcase9:success');
    }
    catch(e){
      console.log('TESTCASE:testcase9:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })      
      await page.waitForSelector('tr');
      await page.waitForSelector('th');
     
      console.log('TESTCASE:testcase10:success');
    }
    catch(e){
      console.log('TESTCASE:testcase10:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();
  
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })      
      await page.waitForSelector('td');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myTable");
        return heading.innerHTML;
      })
     
      console.log('TESTCASE:testcase11:success');
    }
    catch(e){
      console.log('TESTCASE:testcase11:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })(); 

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('footer');
      console.log('TESTCASE:testcase12:success');
    }
    catch(e){
      console.log('TESTCASE:testcase12:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })

      await page.waitForSelector('h5');
      console.log('TESTCASE:testcase13:success');
    }
    catch(e){
      console.log('TESTCASE:testcase13:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('a');
      await page.waitForSelector('i');

      console.log('TESTCASE:testcase14:success');
    }
    catch(e){
      console.log('TESTCASE:testcase14:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
      await page.goto('http://localhost:4200');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.waitForSelector('canvas');

      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#myChart");
        return heading.innerHTML;
      })

      const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#myChart2");
        return heading.innerHTML;
      })

      console.log('TESTCASE:testcase15:success');
    }
    catch(e){
      console.log('TESTCASE:testcase15:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();