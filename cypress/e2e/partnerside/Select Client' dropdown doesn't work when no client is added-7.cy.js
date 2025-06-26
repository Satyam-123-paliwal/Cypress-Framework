import Login from "../../support/Page/Login";
import PostRequirement from "../../support/PageObjects/TestCse7";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevents Cypress from failing the test
});

describe('dropdown of client',() =>{
    const len=new Login();
    before(()=>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.url);
            len.Loginfn(data.partner.username,data.partner.password);
        })
    })
    it('Login',() =>{
        

        const req=new PostRequirement();
        req.navigatetorequirement();
        req.Requirementpost('full stack developer');
        const clientName='tim';
        req.selectClient(clientName);
    })
})