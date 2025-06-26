import Login from "../../support/Page/Login";
import Vendor from "../../support/PageObjects/Testcase2";
describe('partner and Login', () =>{
    const len=new Login();
    before(()=>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.url);
            len.Loginfn(data.username,data.password);
        })
    })
    it('Login',() => {
        

        const ven=new Vendor();
        ven.clicksec('Fleek QA -1','hi plz accept the invite');
        cy.xpath("//p[contains(text(), 'Invited successfully for Empanelment')]",{timeout:10000}).should('be.visible');
        ven.logoutbtn();
        len.Loginfn('shyam@yopmail.com','Shyam123@');
        ven.notification();
        //cy.contains('Invited successfully for Empanelment',{timeout: 100000}).should('be.visible').pause();
    })
})