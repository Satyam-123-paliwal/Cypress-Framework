
import Login from "../../support/Page/Login"
import Bench from "../../support/PageObjects/TestCase10"

describe('bench matching positions serch bar', () => {
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('Login Page', () => {
        
        cy.url().should('include','https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net/vendor/dashboard');

    

        const ben=new Bench();
        ben.clickBench();
        ben.clickmatchingpositions();
        ben.writesearchbar('Java Developer');
        ben.validateSearchResult('Java Developer');
        ben.clickicon();
    });
    
});