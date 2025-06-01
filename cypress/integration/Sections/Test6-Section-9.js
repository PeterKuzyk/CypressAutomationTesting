/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe';

describe('Understand How to Automate Frames, Child windows, Calendars', () => {

    it('Child Windows in Cypress ', () => {
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

    it('Handling Frames with Cypress', () => {
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

        const date = "6";
        const month = "5";
        const year = "2026";
        const expectedDate = [month, date, year];

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button", year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click();
        cy.contains("abbr", date).click();
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) =>
        {
            cy.wrap($el).invoke('val').should('eq', expectedDate[index]);
        });
    })
})
