describe('Use then() function', () => {
    it('Test using then function', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.brand').then(function (logoElement) {
            cy.log(logoElement.text())
        })
    })

    it('Using aliases as()', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
         // declare aliases
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each(($el) => {
            const vegName = $el.find('h4.product-name').text();
            if (vegName.includes('Cashews')) {
                cy.wrap($el).find('button').should('be.visible').click();
            }
        })
    })

    it('Using console.log() & cy.log() ', () => {
        // in java you going to see it directly in console, in Cypress it print in browser, it is not cypres command
        console.log("sf");
        // print logs in cypress runner
        cy.log('print in cypress')
    })
})
