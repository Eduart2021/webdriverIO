import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('login credentials',()=>{
    it('should login', async ()=>{
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        await LoginPage.logOut()
    })
})
describe('Log out',()=>{
    it("Should Log out", async ()=>{
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.logOut()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            "You logged out of the secure area!")
    })
})