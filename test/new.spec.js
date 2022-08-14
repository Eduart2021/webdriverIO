const { remote } = require("webdriverio")


describe("New In", () => {
  it("Sample", async () => {
    const browser = await remote({
      capabilities: {
        browserName: "chrome"
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

    // const apiLink = await browser.$('li[id="1848609637"]')
    // //li[id="1848609637"]
    // await apiLink.click();

    await browser.saveScreenshot("./screenshot.png");
    await browser.deleteSession();
  });
});
