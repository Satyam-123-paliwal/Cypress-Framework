class PostRequirement{
    constructor(){
        this.requirement="//span[text()='Requirements']";
        this.reqbtn="//button[normalize-space()='Post a requirement']";
        this.text="textarea[name='promptJson']";
        this.nextbtn="//button[normalize-space()='Next']";
        this.drop="#mui-component-select-clientCode";
    }
    navigatetorequirement(){
        cy.xpath(this.requirement).click();
    }
    Requirementpost(text){
       cy.xpath(this.reqbtn).click();
       cy.get(this.text).type(text);
       cy.intercept('GET', '**/Clients/ListByOrgCode**').as('getClients');
       cy.xpath(this.nextbtn).should('be.visible').click();
       cy.wait('@getClients');

    // Just wait for the element to exist, not necessarily be visible
       cy.get(this.drop, { timeout: 10000 }).should('exist');
    }
    
    selectClient(clientName) {
    // Click to open the dropdown
       cy.get(this.drop, { timeout: 10000 }).should('exist').click();

    // Wait until dropdown options are visible (listbox appears)
       cy.get('ul[role="listbox"]', { timeout: 10000 }).should('be.visible');
 
    // Select the desired client from the list
        cy.contains('ul[role="listbox"] li', clientName, { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click();

    // Verify that the dropdown now shows the selected client
      cy.get(this.drop).should('contain.text', clientName);
    }   
}
export default PostRequirement;