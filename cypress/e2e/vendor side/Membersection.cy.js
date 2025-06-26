import Login from "../../support/Page/Login";
import Members from "../../support/PageObjects/Members";

describe('invite new team member', () => {
    const len=new Login();
    before(() =>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.vendor.url);
            len.Loginfn(data.vendor.username,data.vendor.password);
        })
    })
    it('Login Page', () =>{
        

        const mem=new Members();
        mem.clickmembersection();
        mem.clickmemberbutton();
        mem.enterfirst('abc');
        mem.enterlast('def');
        mem.enteremail('abc@gmail.com');
        mem.enterphone('9875423012');
        mem.selectAccess('Vendor');
        mem.clicksubmitbutton();
        mem.clickdelete();
    });
});