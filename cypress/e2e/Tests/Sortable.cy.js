/// <reference types="cypress"/>

import ClickOnTab from "..//..//pages/Sortable";
import Navigate from "..//..//components/Navigate";

describe("grid test", () => {
  it("Url open", () => {
    cy.visit("https://demoqa.com");
  });
  it("Navigate to Interactions & Selectable", () => {
    Navigate.NavigateInteractions();
    Navigate.NavigateSelectable();
  });
  it("Click on Grid Tap and verify Items", () => {
    ClickOnTab.ClickTab("grid");
    ClickOnTab.GridItemsVerify("grid");
  });
  it("Click on List Tap Verify List Items", () => {
    ClickOnTab.ClickTab("list");
    ClickOnTab.ListItemsVerify("list");
  });
});
