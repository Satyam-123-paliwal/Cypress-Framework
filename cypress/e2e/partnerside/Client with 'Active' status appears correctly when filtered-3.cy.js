import Login from "../../support/Page/Login";
import Client from "../../support/PageObjects/TestCase3";

describe('Client status filter validation', () => {
    const len=new Login();
    before(()=>{
        cy.fixture('LoginData').then((data)=>{
            cy.visit(data.partner.url);
            len.Loginfn(data.partner.username,data.partner.password);
        })
    })
    it('Login and client filter validation', () => {
        const client=new Client();
       // const name='Client_${Date.now()}';
        client.navigateToClients();
        client.addClient('jimmy','jimmy is a powerful person','9776543908','jimmy2@gmail.com','noida sec-63');
        client.applyActiveFilter();
        client.validateClientStatus('Active');
    });
});