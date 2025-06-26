class Candidatestatus {
  constructor() {
    this.requirement = "//span[text()='Requirements']";
    // this.status="//tr[1]/td[1]";
    // this.btn="(//span[text()='OnHold'])[1]";
    this.updatebtn = "//button[text()='Update']";
  }
  verifystatus() {
    cy.xpath(this.requirement).click();
    //cy.xpath(this.status).click();
    cy.get('p.MuiTypography-root')
      .contains('Open')
      .last()                 // Selects only the first match
      .should('be.visible')
      .click({ force: true });

    cy.contains('label', 'OnHold')
      .should('be.visible')
      .click({ force: true });

    // cy.xpath(this.btn).click();
    // cy.contains('span', 'OnHold').click();
    //cy.contains('span', 'OnHold', { timeout: 10000 }).should('be.visible').click();

    cy.xpath(this.updatebtn).click();
  }
  verifyresult(expectedtext) {
    cy.get('p.MuiTypography-root')
      .contains('expectedtext')
      .last()
      .should('be.visible')
  }

}
export default Candidatestatus;