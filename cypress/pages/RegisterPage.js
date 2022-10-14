import BasicFuncation from "../BasicFuncation";

export default class RegisterPage extends BasicFuncation {
  static RegisterPageVisible() {
    cy.isVisible(".registration-page");
  }

  static RegisterFormFillOut() {
    cy.fixture("UserRegisterData").then((data) => {
      cy.userRegister(
        data.FirstName,
        data.LastName,
        data.dayOfBirth,
        data.monthOfBirth,
        data.yearOfBirth,
        data.Email,
        data.CompanyName,
        data.Password,
        data.ConfirmPassword
      );
    });
  }
  static clickOnRegisterBtn() {
    cy.get("#register-button").click();
  }
}
