import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/HomePage";
import { GlobalPage } from "../pages/GlobalPage";
import { ContactPage } from "../pages/ContactPage";

let homePage: HomePage;
let globalPage: GlobalPage;
let contactPage: ContactPage;

Given("I am in Home page", async function () {
  homePage = new HomePage(this.page);

  await homePage.navigate();
});

When("I navigate to Contact page", async function () {
  globalPage = new GlobalPage(this.page);
  await globalPage.clickContactNav();
});