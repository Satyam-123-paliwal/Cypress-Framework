class Visibilty{
    constructor(){
        this.req="//span[text()='Requirements']"
        this.lim="(//table//tbody/tr[td[normalize-space()='Limited']])[2]";
    }
    verify(){
        cy.xpath(this.req).click();
        cy.xpath(this.lim).click();
        cy.url('https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net/company/candidates').should('be.visible');
    }
}
export default Visibilty;