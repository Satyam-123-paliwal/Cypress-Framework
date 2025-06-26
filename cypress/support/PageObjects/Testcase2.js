class Vendor{
    constructor(){
        this.vendor="//span[text()='Vendors']";
        this.search="//a[@href='/company/findvendors']//span[text()='Search']";
        this.findvendors="//p[text()='Fleek QA -1']";
        this.button="//button[normalize-space()='Invite for Empanelment']";
        this.textarea="(//textarea[@required and contains(@class, 'MuiInputBase-input') and contains(@class, 'MuiInputBase-inputMultiline')])";
        this.invitebtn="//button[normalize-space()='Invite']";
        //this.logoutbtn="//div[@class='text-info flex items-center justify-end text-indigo-500 cursor-pointer px-2 hover:text-indigo-700' and normalize-space()='Logout']";
        this.logout="//div[contains(@class, 'text-info') and contains(text(), 'Logout')]";
        this.onboardingsection="//span[text()='Onboarding']";
        this.searchbtn="input[placeholder='Search Vendors']";
        this.nbutton="svg[fill='none']"
    }
    clicksec(text,txtmessage){
        cy.xpath(this.vendor).click();
        cy.xpath(this.search).click();
        cy.get(this.searchbtn).type(text);
        cy.xpath(this.findvendors).click();
        cy.xpath(this.button).click();
        cy.xpath(this.textarea).type(txtmessage);
        cy.xpath(this.invitebtn).click();
    }
    logoutbtn(){
        cy.xpath(this.logout).click();
    }
    notification(){
        cy.get(this.nbutton).click();
    }
}
export default Vendor;