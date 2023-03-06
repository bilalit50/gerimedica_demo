/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import PracticeForm from "../../pages/PracticeForm";
describe("User Can Submit the Form.", () => {
  before(() => {
    OpenUrl.url();
  });
  it("Should Click on Forms Navigation and Practice-Form", () => {
    Navigate.NavigateForms();
    Navigate.NavigatePracticeForm();
    OpenUrl.UrlVerify("automation-practice-form");
  });
  it("Should Fill Out The Student Registration Form", () => {
    PracticeForm.StudentRegistrationData();
  });
  it("Should Click on Submit", () => {
    PracticeForm.SubmitForm();
  });
  it("Should be Verify Successfully Submitted", () => {
    PracticeForm.SubmittedSuccessfully();
  });
  it("Should Click on Close Button", () => {
    PracticeForm.CloseDialog();
  });
});
