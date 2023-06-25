import puppeteer from 'puppeteer'
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport:null,
    devtool:true
  })
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com')
  const handle= await page.evaluateHandle(()=>window)
  const eles=await page.$('.mnav')
  eles.screenshot()
   const params=await eles.boundingBox()
   console.log(handle,11)
  // const elet =await page.$eval('.mnav',node=>node.innerHTML='11')
  // elet.
  // elet.click()
})()