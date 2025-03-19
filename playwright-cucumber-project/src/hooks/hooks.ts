import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  console.log("Launching browser...");
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  console.log("Creating new browser context and page...");
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  console.log("Closing page and context...");
  await page.close();
  await context.close();
});

AfterAll(async function () {
  console.log("Closing browser...");
  await browser.close();
});

export { page };