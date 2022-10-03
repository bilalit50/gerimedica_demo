// const headerMenuList = [
//   "Computers",
//   "Desktops",
//   "Notebooks",
//   "Software",
//   "Electronics",
//   "Camera & photo",
//   "Cell phones",
//   "Others",
//   "Apparel",
//   "Shoes",
//   "Clothing",
//   "Accessories",
//   "Digital downloads",
//   "Books",
//   "Jewelry",
//   "Gift Cards",
// ];
// describe("Home page test", () => {
//   it("Open Website", () => {
//     cy.visit("https://demo.nopcommerce.com/");
//   });
//   it("Verify website status and title", () => {
//     cy.request("https://demo.nopcommerce.com/").its("status").should("eq", 200);
//     cy.title("https://demo.nopcommerce.com/").should(
//       "eq",
//       "nopCommerce demo store"
//     );
//   });
//   it("Verify header upper menu list", () => {
//     const listUpperMenuItems = [
//       "Register",
//       "Log in",
//       "Wishlist (0)",
//       "Shopping cart (0)",
//     ];
//     cy.get(".header .header-upper .header-links ul li").each(
//       (items, index, list) => {
//         cy.wrap(list).should("have.length", 4);
//         cy.wrap(items)
//           .should("be.visible")
//           .and("contain.text", listUpperMenuItems[index]);
//       }
//     );
//   });

//   it("Verify search box and search button", () => {
//     cy.get("#small-search-box-form input")
//       .should("be.visible")
//       .and("be.empty")
//       .type("laptop");
//     cy.get(".search-box-button")
//       .should("be.enabled")
//       .and("have.text", "Search")
//       .click();
//     cy.url().should("contains", "search");
//   });

//   it("Verify header navigation", () => {
//     cy.viewport(1440, 900);
//     cy.get(".header-menu .notmobile li").each((items, index, list) => {
//       cy.wrap(list).should("have.length", 16);
//       cy.wrap(items).should("contain.text", headerMenuList[index]);
//     });
//   });
// });

describe("Verify all herf link of webpage", function () {
  it("Open url", function () {
    cy.visit("https://www.testing.com/covid-19-antibody-testing/");
  });
});
