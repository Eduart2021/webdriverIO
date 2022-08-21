
import SearchPage from '../pageobjects/search.page'

describe("testing web",  () => {
  it("should read title in webpage", () => {
    SearchPage.open
   
    expect(browser).toHaveTitle(
      "Electronics, Cars, Fashion, Collectibles & More | eBay"
    );
  });

  it("search input text and click btn", ()=>{
   SearchPage.searchInput.addValue('Laptop')
   SearchPage.searchButton.click();
    browser.pause(2000)
   expect(SearchPage.searchInput).toHaveValue('Laptop')
  })

  it("change page and read title", ()=>{
    expect(browser).toHaveTitle('laptop: Search Result | eBay')
   })

   it("select text from dropdown", ()=>{
    expect(SearchPage.category).toHaveText('PC Laptops & Netbooks')
   })
});
