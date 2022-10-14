import RegisterPage from "..//pages/RegisterPage";
import Navbar from "../components/Navbar";
describe("Register user Test", () => {
  it("Should open Url", () => {
    RegisterPage.url();
  });
  it("Should click on navbar register link", () => {
    Navbar.clickOnRegister();
  });
  it("Should visible register page", () => {
    RegisterPage.RegisterPageVisible();
  });
  it("Should fill out register form", () => {
    RegisterPage.RegisterFormFillOut();
  });
  it("Should click on register Button", () => {
    RegisterPage.clickOnRegisterBtn();
  });
  it("Take screenshot with percy of register page", () => {
    cy.percySnapshot();
  });
});
