
import Login from "../../support/Page/Login";
import Clientfilter from "../../support/PageObjects/TestCase9";

describe('login and client filter', () => {
    const len = new Login();
    before(() => {
        cy.fixture('LoginData').then((data) => {
            cy.visit(data.partner.url);
            len.Loginfn(data.partner.username, data.partner.password);
        })
    })
    it('test-9', () => {
        const cl = new Clientfilter();
        cl.clickRequirement();
        cl.clickclient();
        cl.selectClient('tim1');
        //cy.wait(4000);

        //cy.wait(4000000);
        cl.verifyClientRowsContain('tim1');

    });
});