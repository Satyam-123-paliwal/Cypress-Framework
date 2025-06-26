class Requirement{
    constructor(){
        this.requirementsection="//span[text()='Requirements']";
        this.matchingcandidate="//div[text()='1 Matching Candidates']";
        this.searchbar="input[placeholder='Search Resources']";
        this.resourcename="//div[contains(@class ,'cursor-pointer') and contains(@class, 'hover:text-indigo-700') and normalize-space(text())='Ravi Sharma']";
        this.icon="path[stroke='black']";
    }

    clickrequirement(){
        cy.xpath(this.requirementsection ,{timeout:10000}).click();
    }

    clickmatching(){
        cy.xpath(this.matchingcandidate ,{timeout:10000}).click();
    }

    writesearch(keyword){
        cy.get(this.searchbar , {timeout:10000}).type(keyword);
    }

    verifyresourcename(expectedText){
        cy.xpath(this.resourcename , {timeout:10000}).should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).to.include(expectedText);
        });
    }

    clickicon(){
        cy.get(this.icon).click();
    }
    

}
 export default Requirement;