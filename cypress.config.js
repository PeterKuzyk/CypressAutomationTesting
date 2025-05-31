/// <reference types="Cypress" />
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const watch = require('cypress-watch-and-reload/plugins'); // Import the plugin

module.exports = defineConfig({
  projectId: 'kgy48c',
  // it can override default 4000 ms to time you need, works globally, not the best solution
  defaultCommandTimeout: 6000,
  // mochawesome-reporter configs
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env: {
    url: "https://rahulshettyacademy.com",
  },

  retries: {
    runMode: 1,

  },

  e2e: {
    setupNodeEvents(on, config) {
      // Tell the plugin which application files/patterns to watch
      // config.env['cypress-watch-and-reload'] = {
      //   watch: ['support/**/*', 'integration/**/*', 'e2e/**/*'], // ADJUST THESE PATHS to your application's source code
      // };
      // // Apply the plugin's setupNodeEvents
      // return watch(on, config);


      on('file:preprocessor', cucumber());
      // mochawesome-reporter configs
      require('cypress-mochawesome-reporter/plugin')(on);

    },

    specPattern: [
        'cypress/integration/examples/*.js',
        'cypress/integration/examples/BDD/*.feature'
        ],

    watchForFileChanges: false,
  },
});
