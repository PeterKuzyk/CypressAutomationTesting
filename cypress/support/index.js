import './commands'; // loads cypress/support/commands.js
import dayjs from 'dayjs'; // use dayjs in Cypress to check date formatting or validate time-sensitive content on the page
window.dayjs = dayjs;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false prevents Cypress from failing the test
    return false;
});
