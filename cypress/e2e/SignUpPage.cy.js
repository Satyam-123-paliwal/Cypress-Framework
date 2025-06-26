describe('Signup Test', () => {
  it('should register a new user successfully', () => {
    // Visit the signup page
    cy.visit('https://fl-01-ymen-shared-ui-cin-test.azurewebsites.net/signup');

    // Fill out the signup form
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="companyName"]').type('RD solutions')
    cy.get('input[name="email"]').type('john@yopmail.com');
    cy.get('input[name="password"]').type('John123@');
  

    // Click the signup/continue button
    cy.get('button[type="submit"]').click();
  });
});
