import BasicFuncation from "../BasicFuncation";

export default class ShoppingCartPage extends BasicFuncation {
  static ShoppingCartPageVisible() {
    cy.isVisible(".shopping-cart-page");
  }
}
