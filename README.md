# Automated Testing Framework For Jupiter Toys Website

This repository contains an automation testing framework using **Playwright**, **Cucumber**, and **TypeScript** with the **Page Object Model (POM)** design pattern.

---

## 📌 Prerequisites

Ensure you have the following installed:
- **Node.js (v18 or later)** – [Download here](https://nodejs.org/)
- **VS Code (Optional, but recommended)** – [Download here](https://code.visualstudio.com/)

---

## 🚀 Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/RVMac/jupiter-toys-automation-playwright.git
   cd playwright-cucumber-project
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Install Playwright Browsers:**
   ```sh
   npx playwright install --with-deps
   ```

---

## 🎯 Running Tests

### **1. Execute All Tests**
```sh
npx cucumber-js
```

### **2. Run a Specific Feature File**
```sh
npx cucumber-js src/features/example.feature
```

### **3. Run Tests in Debug Mode**
```sh
npx playwright test --debug
```

---

## 📝 Test Reports

### **1. JSON Report**
After running tests, find the **JSON report** at:
```sh
reports/cucumber-report.json
```

### **2. Generate HTML Report**
After running tests, the test will auto create an **HTML report** at:
```sh
playwright-cucumber-project/reports/cucumber-report.html
```

---

## Running Tests via GitHub Actions

This project includes a GitHub Actions workflow to automate test execution.
This will automatically trigger the run during pushing of changes to main branch in GitHub.

To manually trigger the workflow:
1. Navigate to the **Actions** tab in your GitHub repository.
2. Select the **Run Automation Tests** workflow and click **Run workflow**.
3. Monitor the execution logs to view test results.

## Reporting

After execution, test reports will be generated:
- **playwright-cucumber-project/reports/cucumber-html-report.html** (Cucumber HTML reports)


### **2. View Reports**
After the GitHub Actions run is complete:
- Go to **Actions** tab.
- Select the workflow run.
- Download the **cucumber-html-report** artifact.

---

## 🏗 Project Structure

```
.github/workflows/   # GitHub Actions CI/CD workflow
playwright-cucumber-project/
│── src/
│   ├── features/        # Gherkin feature files
│   ├── step-definitions/ # Cucumber step definitions
│   ├── pages/           # Page Object Model classes
│   ├── hooks/           # Cucumber hooks (setup/teardown)
│── reports/             # Test reports
│── cucumber.js         # Cucumber configuration
│── package.json        # Project dependencies and scripts
│── tsconfig.json       # TypeScript configuration
│── README.md           # Project documentation
```

## Contributing

Feel free to fork and submit pull requests.