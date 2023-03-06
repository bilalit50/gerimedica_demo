/// <reference types="cypress"/>
import Navigate from "..//../components/Navigate";
import OpenUrl from "../../BasicFuncation";
import TooltipsHover from "../../pages/ToolTipsHover";
describe("Verify The Tool Tip", () => {
  before(() => {
    OpenUrl.url();
  });
  it("Should Click on Widgets Navigation & ToolTips", () => {
    Navigate.NavigateWidgets();
    Navigate.NavigateToolTips();
    OpenUrl.UrlVerify("tool-tips");
  });
  it("Should Verify “Hover me to see” Button & “You hover over the button” Appeared Message", () => {
    TooltipsHover.HoverToolTips();
  });
});
