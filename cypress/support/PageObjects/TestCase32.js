class StatusUpdate{
    constructor(){
        this.appsection="//span[text()='Applicants']";
        this.status="//td[3]";
        this.selectstatus="//span[text()='Technical Assessment']";
        this.statustext="textarea[name='Comments']";
        this.updatebtn="//button[text()='Update']";
    }
    Updatestatus(comments){
        cy.xpath(this.appsection).click();
        cy.xpath(this.status).click();
        cy.xpath(this.selectstatus).click();
        cy.get(this.statustext).type(comments);
        cy.xpath(this.updatebtn).click();

    }
}
export default StatusUpdate;