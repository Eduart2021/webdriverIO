const { remote } = require("webdriverio")


describe("New In", () => {
  it("Sample", async () => {
    const browser = await remote({
      capabilities: {
        browserName: "chrome",
      //   'goog:chromeOptions':{
      //     args: ['headless']
      // }
      },
    });

    await browser.url("https://www.zedy3d.com/blank-pageab3a8782");

    const div = await browser.waitUntil(async () => {
      const apiLink = await browser.$$('div[class="photogallery-column  column-4"]')
      if (apiLink <=1) {
          return false
      }
      return apiLink[15]
  }, {
      timeoutMsg: 'Never found elements'
  })
  await div.click()

    await browser.saveScreenshot("./screenshots/screenshot.png")
    await browser.deleteSession();
  });
});
