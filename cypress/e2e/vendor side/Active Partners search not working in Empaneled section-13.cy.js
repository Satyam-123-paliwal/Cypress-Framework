import Login from "../../support/Page/Login"
import Partner from "../../support/PageObjects/TestCase13"

describe('Partner and empaneled section search bar', () => {
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('search bar working', () => {
        
        const part=new Partner();
        part.clickpartner();
        part.clickempaneled();
        part.clciksearch('Tata');
        part.validateresult('No Data Available');
    })
})