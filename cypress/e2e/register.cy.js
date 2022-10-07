import RegisterPage from "..//pages/RegisterPage";
import Navbar from "../components/Navbar";
import { url } from "..//..//config";
describe("Register user Test", () => {
  before(function () {
    cy.visit(url);
  });

  it("Should click on navbar register link", () => {
    Navbar.clickOnRegister();
  });
  it("Should visible register page", () => {
    RegisterPage.RegisterPageVisible();
  });
  it("Should fill out register form", () => {
    RegisterPage.RegisterUser();
  });
  it("Should click on register Button", () => {
    RegisterPage.ClickOnRegisterBtn();
  });
  it("Should visible register page", () => {
    RegisterPage.RegisterPageVisible();
  });
});
