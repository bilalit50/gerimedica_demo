import WishListPage from "../pages/WishListPage";
import Navbar from "../components/Navbar";
import { url } from "..//..//config";

describe("Wish List Page Test", () => {
  before(function () {
    cy.visit(url);
  });
  it("Should Click on Navbar Wishlist Link", () => {
    Navbar.clickOnWishList();
  });
  it("Should Visible Wishlist page", () => {
    WishListPage.WishListPageVisible();
  });
});
