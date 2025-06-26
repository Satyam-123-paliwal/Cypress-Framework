import Login from "../../support/Page/Login";
import Techstack from "../../support/PageObjects/TestCase29";

describe('searchbar of techstack',()=>{
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('techstack search bar working',()=>{
        const stack=new Techstack();
        stack.verifysearchbar('Debugging');
        stack.verifyresult();
    })
})