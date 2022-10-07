import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";
import { url } from "../../config";

describe("Should User Login Test", () => {
  before(function () {
    cy.visit(url);
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
});
