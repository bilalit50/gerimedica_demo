import WishListPage from "../pages/WishListPage";
import Navbar from "../components/Navbar";

describe("Wish List Page Test", () => {
  before(function () {
    WishListPage.url();
  });
  it("Should Click on Navbar Wishlist Link", () => {
    Navbar.clickOnWishList();
  });
  it("Should Visible Wishlist page", () => {
    WishListPage.WishListPageVisible();
  });
  it("Should verify url", () => {
    WishListPage.url("wishlist");
  });
});
