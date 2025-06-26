import Login from "../../support/Page/Login";
import StatusUpdate from "../../support/PageObjects/TestCase32";

describe('comments are showing on vendor side or not', () => {
    const len = new Login();
    before(() => {
        cy.fixture('LoginData').then((data) => {
            cy.visit(data.partner.url);
            len.Loginfn(data.partner.username, data.partner.password);
        })
    })
    it('Login with comment', () => {

        const status = new StatusUpdate();
        status.Updatestatus('you are shortlisted for technical assessment');
        //cy.contains("//p[text()='Status updated successfully']").should('be.visible');
        cy.xpath("//p[@class='text-title font-bold mt-4']", { timeout: 5000 }).should('be.visible');
    })
})