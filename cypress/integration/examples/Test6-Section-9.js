/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('Understand How to Automate Frames, Child windows, Calendars', () => {

    it.skip('Child Windows in Cypress ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(function (el) {
                const url = el.prop('href');
                cy.visit(url);
                cy.origin(url, () => {
                    cy.get('div.navbar-collapse a[href*=\'about\']').click();
                })
            }
        );
    });

    it.skip('Handling Frames with Cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship").should("exist");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        // The best way of wait, not working, might be a Cypress issue
        // cy.iframe()
        //     .find("h1[class*='pricing-title']", { timeout: 10000 })
        //     .should("have.length", 2);

        // using wait is only one way to make it work; otherwise the selector is not loaded in DOM
        cy.wait(1000);
        cy.iframe().find("h1[class*='pricing-title']").should("exist");
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
    })

    it('Handling Calendars with Cypress', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
       cy.get('.react-date-picker__inputGroup').click()
    })


})
