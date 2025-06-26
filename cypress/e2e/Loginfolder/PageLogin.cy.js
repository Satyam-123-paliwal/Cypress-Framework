import Login from "../../support/Page/Login";
describe('login credebtials',() =>{
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('successfully Login or not',() =>{
        cy.xpath("//div[text()='Vendor']",{timeout:10000}).should('be.visible');
    })
})