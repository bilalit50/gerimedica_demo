import { username, userPassword } from "..//..//config";
export default class LoginPage {
  static loginPageVisible() {
    cy.isVisible(".login-page");
  }
  static loginUser() {
    cy.userLogin(username, userPassword);
  }
}
