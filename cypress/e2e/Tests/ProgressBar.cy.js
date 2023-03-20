/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import ProgressBar from "../../pages/ProgressBar";

describe("Verify Progress Bar", () => {
  before(() => {
    OpenUrl.url();
  });
  it("Should Click on Widgets Navigation and then click on Progress-Bar", () => {
    Navigate.NavigateWidgets();
    Navigate.NavigateProgressBar();
    OpenUrl.UrlVerify("progress-bar");
  });
  it("Should Click on Start Button and Verify The Progress Bar is 100% With Green Color", () => {
    ProgressBar.ClickOnStartButton();
    ProgressBar.newbar();
  });
});
