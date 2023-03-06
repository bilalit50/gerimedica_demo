export default class {
  static DragDrop() {
    cy.get(".simple-drop-container #draggable").drag(
      ".simple-drop-container #droppable"
    );
    cy.get(".simple-drop-container #droppable p").contains("Dropped!");
  }
}
