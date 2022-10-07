export default class ShoppingCartPage {
  static urlverify(url) {
    cy.url().should("contains", url);
  }
  static ShoppingCartPageVisible() {
    cy.isVisible(".shopping-cart-page");
  }
}
