class Members{
    constructor(){
       this.membersection="//span[text()='Members']";
       this.memberbutton= "//button[normalize-space(text())='Invite new team member']";
       this.firstname="input[name='firstName']";
       this.lastname="input[name='lastName']";
       this.email="input[name='email']";
       this.phone="input[name='phone']";
       this.accessdropdown="div[role='combobox']";
       this.dropdownoptions="ul[role='listbox'] li[role='option']";
       this.buttonsubmit="//button[normalize-space(text())='Submit']"
       this.deleteicon="svg[data-testid='DeleteOutlineOutlinedIcon']";
    }
    clickdelete(){
        cy.get(this.deleteicon).click();
    }

    clicksubmitbutton(){
        cy.xpath(this.buttonsubmit).click();
    }

    clickmembersection(){
        cy.xpath(this.membersection , {timeout:10000}).click();
    }

    clickmemberbutton(){
        cy.xpath(this.memberbutton,{timeout:10000}).click();
    }

    enterfirst(keyword){
        cy.get(this.firstname).type(keyword);
    }

    enterlast(keyword){
        cy.get(this.lastname).type(keyword);
    }
    enteremail(keyword){
       cy.get(this.email).type(keyword);
    }

    enterphone(keyword){
        cy.get(this.phone).type(keyword);
    }

    selectAccess(optiontext){
        cy.get(this.accessdropdown).click();
        cy.get(this.dropdownoptions).contains(optiontext).click();
    }
}
export default Members