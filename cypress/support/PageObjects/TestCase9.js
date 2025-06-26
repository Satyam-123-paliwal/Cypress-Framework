class Clientfilter {
    constructor() {
        this.requirement = "//span[text()='Requirements']";
        this.clientbtn = "//button[normalize-space()='Client']";
    }
    clickRequirement() {
        cy.xpath(this.requirement).click();
    }
    clickclient() {
        cy.xpath(this.clientbtn).click();
    }
    selectClient(clientName) {
        const clientxpath = `//li[contains(@class, 'MuiMenuItem-root') and .//span[contains(text(), '${clientName}')]]`;
        cy.xpath(clientxpath).click({ force: true });
        cy.get('body').click(0, 0);
        cy.wait(2000);
    }

    verifyClientRowsContain(clientName) {
        cy.get('//table/tbody/tr/th//span').each(($row) => {
            cy.wrap($row).should('contain.text', clientName);
        });
    }

}
export default Clientfilter;