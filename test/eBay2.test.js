import SearchPage from '../pageobjects/search.page'

describe("testing web", () => {
    
    it("click button and verify url", () => {
      browser.url("https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535");
        SearchPage.banerButton.click()
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watchbox-sfc-081522')
    });

});
