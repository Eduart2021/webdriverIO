const { remote } = require("webdriverio")
import basePage from '../pageobjects/basePage'


describe('should scroll', ()=>{
    it('Sample start scroll', async ()=>{
        const browser = await remote({
            capabilities: {browserName: "chrome"}
        })
        await browser.url("http://127.0.0.1:5500/client/index.html")

        await browser.saveScreenshot("./screenshots/screenshotBefore.png")
        //code
        let clickable =await browser.$('[id="overflow7"]')
         await clickable.click()
           
        await browser.saveScreenshot("./screenshots/screenshotAfter.png")
    })
})
