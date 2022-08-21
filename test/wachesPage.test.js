describe("testing watches",  () => {
    it("should baner container in webpage", () => {
      browser.url("https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535");
     
      const banerFirst = $('[class="b-promobanner__info"]')
      expect(banerFirst).toBeDisplayed()
    });
    it("baner has text", () => {
        const banerTitle = $('[class="b-promobanner__info-title"]')
        expect(banerTitle).toHaveText('Take 5% off WatchBox  ')
    });
    it("baner contain partial-text", () => {
        const banerTitle = $('[class="b-promobanner__info-title"]')
        expect(banerTitle).toHaveTextContaining('off WatchBox')
    });
    it("baner contain link-button have fashion", () => {
        const banerButton = $('[class="b-promobanner__info-btn btn fake-btn"]')
        expect(banerButton).toHaveLinkContaining('/fashion/')
    });
    it("baner button is clickable", () => {
        const banerButton = $('[class="b-promobanner__info-btn btn fake-btn"]')
        expect(banerButton).toBeClickable()
    });
    it("click button and verify url", () => {
        const banerButton = $('[class="b-promobanner__info-btn btn fake-btn"]')
        banerButton.click()
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watchbox-sfc-081522')
    });
});