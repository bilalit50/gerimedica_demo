import BasicFuncation from "../BasicFuncation";

export default class WishListPage extends BasicFuncation {
  static WishListPageVisible() {
    cy.isVisible(".wishlist-page");
  }
}
