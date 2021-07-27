/* eslint-disable no-undef */
import { mount } from "@cypress/react";
import { List } from "./List";
import { MargaretProvider } from "@tymate/margaret";
import { theme } from "../ui/theme";

describe("List", () => {
  it("contains the correct number of item & filter by label", () => {
    const listItems = [
      { label: "Buy milk", slug: "from" },
      { label: "Learn", slug: "mock" },
    ];

    mount(
      <MargaretProvider theme={theme}>
        <List items={listItems} />
      </MargaretProvider>
    );
    cy.get('[data-test="item"]').should("have.length", listItems.length);
    cy.get('[data-test="input"]').type("Buy");
    cy.get('[data-test="item"]').should("have.length", 1);
  });
});
