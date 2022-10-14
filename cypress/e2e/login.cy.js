import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";

describe("Should User Login Test", () => {
  it("Should open Url", () => {
    LoginPage.url();
  });
  it("Should Click on Navbar Login link", () => {
    Navbar.clickOnLogin();
  });
  it("Should login Page visible", () => {
    LoginPage.loginPageVisible();
  });
  it("Should login valid credentials", () => {
    LoginPage.loginUser();
  });
  it("Should visible on hover", () => {
    cy.viewport("macbook-15");
    cy.get(".notmobile > li:nth-child(1)").realHover({ delay: 1000 });
    cy.get(".notmobile > li:nth-child(1) .sublist").should("be.visible");
  });
});
