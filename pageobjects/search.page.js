import basePage from "./basePage";

class search extends basePage {

    get searchInput(){
        return $('#gh-ac')
    }
    get searchButton(){
        return $('#gh-btn')
    }
    get category(){
        return $('#gh-cat option:nth-child(1)')
    }
    get banerButton(){
        return $('[class="b-promobanner__info-btn btn fake-btn"]')
    }

    open(){
        super.open("https://www.ebay.com/")
    }
}
export default new search()