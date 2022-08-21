import {expect as chaiExpect} from 'chai'
import SearchPage from '../pageobjects/search.page'

describe("testing watches webpage", () => {
  it("Text button should not be empty", async () => {
    browser.url("https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535");
  
      let infoText = await SearchPage.banerButton.getText()
      chaiExpect(infoText).not.to.be.empty
  
  });
  it("Button tag has to be 'a", async () => {
    let tag = await SearchPage.banerButton.getTagName();
    chaiExpect(tag).to.eq('a')
  });
});
