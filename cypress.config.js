const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Enables the visual recording tool (Cypress Studio)
    experimentalStudio: true, 
    // Set the starting URL for all tests to simplify navigation
    baseUrl: 'https://www.saucedemo.com/', 
    setupNodeEvents(on, config) {
      // Future integration for reporting and custom plugins
    },
  },
});