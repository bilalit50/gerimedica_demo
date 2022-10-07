Cypress.Commands.add("isVisible", (selector) => {
  cy.get(selector).should("be.visible");
});

Cypress.Commands.add("ishidden", (selector) => {
  cy.get(selector).should("not.exist");
});

Cypress.Commands.add(
  "userRegister",
  (
    firstName,
    lastName,
    Bday,
    Bmonth,
    Byear,
    email,
    password,
    ConfirmPassword
  ) => {
    cy.get("#gender-male").click();
    cy.get("#FirstName").type(firstName);
    cy.get("#LastName").type(lastName);
    cy.get("select[name='DateOfBirthDay']").select(Bday);
    cy.get("select[name='DateOfBirthMonth']").select(Bmonth);
    cy.get("select[name='DateOfBirthYear']").select(Byear);
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(ConfirmPassword);
  }
);

Cypress.Commands.add("userLogin", (username, password) => {
  cy.get(".email").type(username);
  cy.get(".password").type(password);
  cy.get("#RememberMe").click();
});
