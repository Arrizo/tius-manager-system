/*
 * @Author: chenzechao
 * @Date: 2023-06-22 17:22:00
 * @LastEditTime: 2023-06-24 18:35:55
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/config/puppeteer.js
 */
import puppeteer from 'puppeteer'
(
  async () => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com')
    await page.screenshot({path:'extm.png'})

    page.on('close',()=>{
      console.log('关闭了')
    })
    page.on('dialog',()=>{
      console.log('dialog----')
    })
  await page.$eval('.mnav',node=>node.innerHTML='32')
  await page.addStyleTag({
    content:".mnav { color:red }"
  })
    console.log(await page.evaluate('1+1')) 
    page.on('response',res=>{
      console.log(res,'response...')
    })
    page.on('request',res=>{
      console.log(res,'request...')
    })
  page.setCookie({name:'2323df',value:'2323423khksdjfs'})
await page.type('#kw','32sdfasdfAsdfasdfs发达的发生啊大叔      wads发售说的啊大叔啊是的32',{delay:100})
await page.click('#su')


  }
)()