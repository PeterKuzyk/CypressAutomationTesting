const { defineConfig } = require("cypress");
const watch = require('cypress-watch-and-reload/plugins'); // Import the plugin


module.exports = defineConfig({
  // it can override default 4000 ms to time you need, works globally, not the best solution
  //defaultCommandTimeout: 6000,

  e2e: {
    setupNodeEvents(on, config) {
      // Tell the plugin which application files/patterns to watch
      config.env['cypress-watch-and-reload'] = {
        watch: ['support/**/*', 'integration/**/*', 'e2e/**/*'], // ADJUST THESE PATHS to your application's source code
      };
      // Apply the plugin's setupNodeEvents
      return watch(on, config);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
