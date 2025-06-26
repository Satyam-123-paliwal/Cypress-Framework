class Client{
    constructor(){
        this.client="//span[text()='Clients']";
        this.clientbuttn="//button[normalize-space()='Add new client']";
        this.name="input[name='clientName']";
        this.textfield="div[data-gramm='false']";
        this.phone="input[name='contactPhone']";
        this.email="input[name='contactEmail']";
        this.address="input[name='address']";
        this.submitbtn="//button[normalize-space()='Submit']";
        this.statusbtn="//button[normalize-space()='Status']";
        this.active="//label[.='Active']/preceding-sibling::input[@type='checkbox']";
        this.inactive="//span[text()='Inactive']";
        this.clientStatusColumn = "//table//tr/td[4]";
    }
    navigateToClients(){
        cy.xpath(this.client).click();
    }
    addClient(name,about,phone,email,address){
        cy.xpath(this.clientbuttn).click();
        cy.get(this.name).type(name);
        cy.get(this.textfield).type(about);
        cy.get(this.phone).type(phone);
        cy.get(this.email).type(email);
        cy.get(this.address).type(address);
        cy.xpath(this.submitbtn).click();
        cy.wait(3000);
    }
    applyActiveFilter() {
       cy.xpath(this.statusbtn).click();  // open the dropdown
       cy.wait(500);

  // Uncheck "Active" if it is already selected
     cy.contains('li', 'Active')
        .find('input[type="checkbox"]')
        .then($checkbox => {
            if (!$checkbox.is(':checked')) {
               cy.wrap($checkbox).click({ force: true });
            }
        });

  // Check "Inactive"
     /* cy.contains('li', 'Inactive')
        .find('input[type="checkbox"]')
        .then($checkbox => {
           if (!$checkbox.is(':checked')) {
             cy.wrap($checkbox).click({ force: true });
           }
        });*/

  // Optional assertion: only "Inactive" should be checked
     //cy.contains('li', 'Inactive').find('input[type="checkbox"]').should('be.checked');
   cy.contains('li', 'Active').find('input[type="checkbox"]').should('be.checked');

  // Close the dropdown if needed (optional)
      cy.get('body').click(0, 0);
      cy.wait(1000); // click outside to close
    }


    validateClientStatus(expectedStatus) {
        cy.xpath(this.clientStatusColumn).then(($elements) => {
           // console.log(`Found ${$elements.length} client rows`);
            //Cypress.log({ name: 'Client Rows', message: `${$elements.length} rows found` });

          /* if ($elements.length === 0) {
                throw new Error('No client rows found – possible wrong filter or no data');
           }*/

           cy.wrap($elements).each(($el) => {
              cy.wrap($el)
                .invoke('text')
                .then(text => {
                  expect(text.trim()).to.eq(expectedStatus);  // Strict match with trimmed value
                });
            });
        });
    }


}
export default Client;
