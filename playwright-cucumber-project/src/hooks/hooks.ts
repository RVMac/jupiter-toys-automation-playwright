import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import reporter from "cucumber-html-reporter";
import * as fs from "fs";

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


AfterAll(async function () {
  const reportPath = "reports/cucumber-report.json";

  let retries = 5;
  while (!fs.existsSync(reportPath) || fs.statSync(reportPath).size === 0) {
    console.warn("Waiting for cucumber-report.json to be generated...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    retries--;
    if (retries === 0) {
      console.error("❌ Error: cucumber-report.json is empty or missing!");
      return;
    }
  }

  console.log("✅ Report found. Generating HTML report...");

  const options: reporter.Options = {
    theme: "bootstrap",
    jsonFile: reportPath,
    output: "reports/cucumber-html-report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      "Test Environment": "QA",
      "Browser": "Chromium",
      "Platform": process.platform,
      "Executed": "Local"
    }
  };

  reporter.generate(options);
});


export { page };