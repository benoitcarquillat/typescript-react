/* eslint-disable no-undef */

describe("The Home Page", () => {
  beforeEach("Mock data", () => {});

  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  it("should have a title", () => {
    cy.get('[data-test="title"]').contains("Typescript styled-components");
  });

  it("should set search value", () => {
    cy.get('[data-test="input"]').type("Mon super");
    cy.get('[data-test="inputValue"]').contains("Mon super");
  });

  it("should load harry potter route", () => {
    cy.get('[data-test="link"]').click();
    cy.get('[data-test="characters"]').should("be.visible");
  });

  it("should intercept get", () => {
    cy.intercept("GET", "/api/characters/*", { fixture: "list.json" });
  });
});
