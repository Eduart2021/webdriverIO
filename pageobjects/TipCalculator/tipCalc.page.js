import basePage from '../basePage'

class tipCalc extends basePage {

    get billAmount () {
        return $('#billAmount')
    }
    get button15 () {
        return $('#btn15')
    }
    get button17 () {
        return $('#btn17')
    }
    get button20 () {
        return $('#btn20')
    }
    get customTip () {
        return $('#customTip')
    }
    get btnCalc () {
        return $('#btncalculate')
    }
    get tipAmount () {
        return $('#tipAmount')
    }
    get total () {
        return $('#total')
    }
    get btnclear(){
        return $('#btnclear')
    }
    open() {
        super.open('http://tipcalculator.zedy3d2.com/')
    }

}
export default new tipCalc()