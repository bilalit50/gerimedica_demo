import Navbar from "../components/Navbar";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import { url } from "..//..//config";

describe("Should Shopping cart page test", () => {
  before(function () {
    cy.visit(url);
  });
  it("Should click on Navbar shopping cart link", () => {
    Navbar.clickOnShoppingCart();
  });

  it("Verify Url", () => {
    ShoppingCartPage.urlverify("cart");
  });
  it("Should Shopping cart page visible", () => {
    ShoppingCartPage.ShoppingCartPageVisible();
  });
});
