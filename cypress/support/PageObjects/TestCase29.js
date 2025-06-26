class Techstack{
    constructor(){
        this.bench="//span[text()='Bench']";
        this.techbtn="//button[normalize-space(text())='Tech Stack']";
        this.search="input[placeholder='Search Resources']";
       // this.result="//table/tbody/tr[7]/th[1]";
    }
    verifysearchbar(text){
        cy.xpath(this.bench).click();
        cy.xpath(this.techbtn).click();
        cy.get(this.search).type(text);
    }
    verifyresult(){
        cy.xpath("//table//th[contains(text(), 'Debugging')]")
          .should('be.visible');
    }
}
export default Techstack;