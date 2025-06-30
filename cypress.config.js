const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  env: {
    allure: true,
    allureResultsPath: "allure-results",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config); // ✅ critical line
      return config;
    },
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
    //baseUrl: "http://localhost:3000",
  },
});
