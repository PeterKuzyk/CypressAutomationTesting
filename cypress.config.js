/// <reference types="Cypress" />
const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

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
        jsonPlaceholderURL: "https://jsonplaceholder.typicode.com",
    },

    retries: {
        runMode: 1,
    },

    e2e: {
        setupNodeEvents(on, config) {

            on('file:preprocessor', cucumber());

            // mochawesome-reporter configs
            require('cypress-mochawesome-reporter/plugin')(on);

        },

        specPattern: [
            'cypress/integration/Sections/*.js',
            'cypress/integration/examples/BDD/*.feature',
            'cypress/integration/API/*/*.js'
        ],

        watchForFileChanges: false,
    },
});
