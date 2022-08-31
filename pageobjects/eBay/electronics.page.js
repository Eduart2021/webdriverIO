import basePage from "../basePage";

class electronic extends basePage{

    get electronicLink(){
        return $('')
    }
    get trendingTopic (){
        return $('')
    }
    get trendContent(){
        return $('')
    }



    open(){
        super.open('https://www.ebay.com/')
    }

}
export default new electronic();