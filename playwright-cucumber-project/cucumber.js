module.exports = {
    default: {
      require: [
        "src/hooks/hooks.ts",
        "src/step-definitions/*.ts"
      ],
      requireModule: ["ts-node/register"],
      format: ["progress-bar", "json:playwright-cucumber-project/reports/cucumber-report.json"],
      publishQuiet: true,
      paths: ["src/features/*.feature"],
      worldParameters: {}
    }
  };
  