import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Browser, chromium, Page } from "playwright";
import { HomePage } from "../pages/HomePage";
import { GlobalPage } from "../pages/GlobalPage";
import { ContactPage } from "../pages/ContactPage";

let browser: Browser;
let page: Page;
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

When("I submit the feedback", async function () {
  contactPage = new ContactPage(this.page);
  await contactPage.clickSubmit();
});

Then("I can see header page error messages", async function () {
  await contactPage.checkHeaderErrorMessage();
});

Then("I can see error messages from required fields", async function () {
  await contactPage.checkHeaderErrorMessage();
});