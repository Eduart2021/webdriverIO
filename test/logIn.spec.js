import LoginPage from  '../../login.page';
import SecurePage from '../../secure.page';

describe('login credentials',()=>{
    it('should login',()=>{
        LoginPage.open()
       
        LoginPage.login('tomsmith','SuperSecretPassword!')

        expect(SecurePage.flashAlert).toHaveTextContaining('hello')
    })
})