export default class basePage{

   async takeScreenShot(from){
        await browser.saveScreenshot(`./screenshots/screenshot${from}.png`)
    }
    clear(field){
        field.setValue();
    }
    open(path){
        browser.url(path)
    }
}
