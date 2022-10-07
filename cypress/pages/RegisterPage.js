import {
  firstname,
  lastname,
  dayOfBirth,
  monthOfBirth,
  yearOfBirth,
  email,
  password,
  confrimPassword,
} from "..//..//config";

export default class RegisterPage {
  static RegisterPageVisible() {
    cy.isVisible(".registration-page");
  }

  static RegisterUser() {
    cy.userRegister(
      firstname,
      lastname,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      email,
      password,
      confrimPassword
    );
  }

  static ClickOnRegisterBtn() {
    cy.get("#register-button").click();
  }
}
