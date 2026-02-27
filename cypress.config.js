const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    experimentalStudio: true, // Double check it is inside the e2e object
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});