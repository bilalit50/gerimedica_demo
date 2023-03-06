export default class {
  static ClickEditIcon() {
    cy.get(
      ".ReactTable .rt-tbody .rt-tr-group:nth-child(2) .action-buttons span[title='Edit']"
    ).click();
  }
  static EditFirstAndLastName() {
    cy.EditTableRow("firstName")
      .should("not.have.value", "Aldren")
      .clear()
      .type("Gerimedica");
    cy.EditTableRow("lastName")
      .should("have.value", "Cantrell")
      .clear()
      .type("BV");
  }
  static HitSaveData() {
    cy.EditTableRow("submit").click();
  }
  static VerifySussccfullyEdit() {
    const editData = [
      "Gerimedica",
      "BV",
      45,
      "alden@example.com",
      "12000",
      "Compliance",
    ];
    cy.get(
      ".ReactTable .rt-tbody .rt-tr-group:nth-child(2) .rt-td:not(:last-child)"
    ).each((element, index) => {
      cy.wrap(element.text()).should("contains", editData[index]);
    });
  }
}
