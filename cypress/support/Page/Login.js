class Login {
  constructor() {
    this.txtUserName = "input[name='email']";
    this.txtPassword = "input[name='password']";
    this.btnSubmit = "button[type='submit']";
   // this.lblmsg = "//div[text()='Partner']";
  }

  Loginfn(username, password) {
    cy.get(this.txtUserName).type(username);
    cy.get(this.txtPassword).type(password);
    cy.get(this.btnSubmit).click();
  }
    //cy.get(this.lblmsg, { timeout: 10000 }).should('have.text', 'Vendor');
  
  //export default LLogin;

}
 export default Login;