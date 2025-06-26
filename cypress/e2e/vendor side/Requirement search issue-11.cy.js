import Login from "../../support/Page/Login";
import Requirement from "../../support/PageObjects/Testcase11";

describe('requirementsection' ,() => {
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('login and search bar', () => {
        

        const req=new Requirement();
        req.clickrequirement();
        req.clickmatching();
        req.writesearch('Ravi Sharma');
        req.verifyresourcename('Ravi Sharma');
        req.clickicon();

    });
});
