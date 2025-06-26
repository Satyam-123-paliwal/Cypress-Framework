class Partner{
    constructor(){
        this.partnersection="//span[text()='Partners']";
        this.empaneledsection="//span[text()='Empaneled']";
        this.search="input[placeholder='Search Partners']";
        this.result="//p[text()='No Data Available']";
        this.onboarding="//span[text()='Onboarding']";
    }

    clickpartner(){
        cy.xpath(this.partnersection, {timeout:10000}).click();
    }

    clickempaneled(){
        cy.xpath(this.empaneledsection ,{timeout:10000}).click();
    }
    clickonboarding(){
        cy.xpath(this.onboarding,{timeout:10000}).click();
    }

    clciksearch(keyword){
        cy.get(this.search ,{timeout:10000}).type(keyword);
    }

    validateresult(expectedtext){
        cy.xpath(this.result ,{timeout:15000}).should('be.visible').invoke('text').then((text) =>{
            expect(text.trim()).to.include(expectedtext);
        });
    }
}

export default Partner