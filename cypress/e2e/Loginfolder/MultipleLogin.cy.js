import Login from "../../support/Page/Login";
//cy.visit("https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net");
//const len=new Login();
for (let i = 1; i <= 5; i++) {
  it(`Login attempt #${i} with same credentials`, () => {
     cy.visit("https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net");
     const len=new Login();
     len.Loginfn('anshpaliwal.900@gmail.com','ansh123@');
  });
}
