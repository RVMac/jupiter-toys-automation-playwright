import * as fs from "fs";
import * as path from "path";
const reporter = require("multiple-cucumber-html-reporter");

const reportsDir = "reports";
const jsonFiles = fs.readdirSync(reportsDir).filter(file => file.endsWith(".json"));
const mergedJsonPath = path.join(reportsDir, "merged-report.json");

if (jsonFiles.length === 0) {
  console.error("❌ Error: No JSON report files found!");
  process.exit(1);
}

// Merge JSON files into one
const mergedResults: any[] = [];
jsonFiles.forEach(file => {
  const filePath = path.join(reportsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  mergedResults.push(...data);
});

// Write merged JSON report
fs.writeFileSync(mergedJsonPath, JSON.stringify(mergedResults, null, 2));

console.log(`✅ Merged ${jsonFiles.length} JSON reports into ${mergedJsonPath}`);

reporter.generate({
  jsonDir: reportsDir,
  reportPath: "reports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "Chromium",
      version: "latest"
    },
    device: "GitHub Actions Runner",
    platform: {
      name: process.platform,
      version: "CI"
    }
  }
});

console.log("✅ Cucumber HTML Report Generated Successfully!");
