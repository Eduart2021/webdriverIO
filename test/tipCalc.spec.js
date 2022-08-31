import tipCalc from "../pageobjects/TipCalculator/tipCalc.page";
import { expect as chaiExpect } from "chai";


before(()=>{
    tipCalc.open()
})

describe("TipCalculator testing", () => {
  it("testing amount and click 15%", async () => {
      await tipCalc.billAmount.addValue("100");
      await tipCalc.button15.click();
      await browser.pause(500);
      tipCalc.takeScreenShot('15%')
      let total = await tipCalc.total.getText();
      chaiExpect(total).to.be.equal("$115.00");
      await tipCalc.btnclear.click()
    await browser.pause(2000);
    });

    it("testing ammount by 17%", async () => {
        tipCalc.open();
        tipCalc.billAmount.addValue("200");
        tipCalc.button17.click();
        await browser.pause(500);
        tipCalc.takeScreenShot('17%')
        let ammount = await tipCalc.total.getText();
        chaiExpect(ammount).to.be.equal("$235.00");
        await tipCalc.btnclear.click();
        await browser.pause(2000);
    });

    it("testing ammount by 20%", async () => {
        tipCalc.open();
        tipCalc.billAmount.addValue("300");
        tipCalc.button20.click();
        await browser.pause(500);
        tipCalc.takeScreenShot('20%')
        let ammount = await tipCalc.total.getText();
        chaiExpect(ammount).to.be.equal("$360.00");
        await tipCalc.btnclear.click()
        await browser.pause(2000)
    });

    it("testing ammount by Custom tip amount %", async () => {
        tipCalc.open();
        let clearField = tipCalc.billAmount;
        clearField.clearValue();
        tipCalc.billAmount.addValue("510");
        tipCalc.customTip.addValue("15");
        tipCalc.btnCalc.click();
        await browser.pause(500);
        tipCalc.takeScreenShot('custom')
        let ammount = await tipCalc.total.getText();
        chaiExpect(ammount).to.be.equal("$586.50");
        await tipCalc.btnclear.click()
        await browser.pause(2000);
  });
})

