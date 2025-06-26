import Login from "../../support/Page/Login";
import Candidatestatus from "../../support/PageObjects/TestCase21";

describe('requirement status', () => {
    const len = new Login();
    before(() => {
        cy.fixture('LoginData').then((data) => {
            cy.visit(data.partner.url);
            len.Loginfn(data.partner.username, data.partner.password);
        })
    })
    it('verify status', () => {
        const req = new Candidatestatus();
        req.verifystatus();
        cy.xpath("//p[@class='text-title font-bold mt-4']", { timeout: 5000 }).should('be.visible');
        req.verifyresult('OnHold');

    })
})