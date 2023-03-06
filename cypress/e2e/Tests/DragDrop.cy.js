/// <reference types="cypress"/>
import Navigate from "..//..//components/Navigate";
import OpenUrl from "../../BasicFuncation";
import DragDrop from "../../pages/DragDrop";

describe("User Can Drag and Drop", () => {
  before(() => {
    OpenUrl.url();
  });

  it("Should Click on Interactions Navigation & Droppable", () => {
    Navigate.NavigateInteractions();
    Navigate.NavigateDroppable();
    OpenUrl.UrlVerify("droppable");
  });
  it("Should “Drag me” box is Successfully Dropped in “Drop here” Area.", () => {
    DragDrop.DragDrop();
  });
});
