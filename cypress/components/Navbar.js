export default class Navbar {
  static clickOnLogo() {
    cy.get(".header-logo").click();
  }
  static clickOnRegister() {
    cy.get(".ico-register").click();
  }
  static clickOnLogin() {
    cy.get(".ico-login").click();
  }
  static clickOnWishList() {
    cy.get(".wishlist-label").click();
  }
  static clickOnShoppingCart() {
    cy.get("#topcartlink").click();
  }
  static search(searchText) {
    cy.get("#small-searchterms").type(searchText);
    cy.get(".search-box-button").click();
  }
}
