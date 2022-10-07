export default class WishListPage {
  static WishListPageVisible() {
    cy.isVisible(".wishlist-page");
  }
}
