import BasicFuncation from "../BasicFuncation";

export default class LoginPage extends BasicFuncation {
  static loginPageVisible() {
    cy.isVisible(".login-page");
  }
  static loginUser() {
    cy.fixture("UserLoginData").then((loginData) => {
      cy.userLogin(loginData.username, loginData.password);
    });
  }
}
