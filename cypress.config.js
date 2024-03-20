const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://webapp8.volopa.com/login",
    "pageLoadTimeout" : 30000,
    "defaultCommandTimeout" : 30000
  },
});
