/* eslint-disable no-undef */
Cypress.env();

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});
