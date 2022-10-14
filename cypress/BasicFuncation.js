export default class {
  static url() {
    cy.visit("https://demo.nopcommerce.com/");
  }
  static urlverify(url) {
    cy.url().should("include", url);
  }
}
