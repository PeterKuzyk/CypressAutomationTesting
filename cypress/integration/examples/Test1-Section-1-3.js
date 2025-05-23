describe('My First Test', () => {

    it('Does not do much!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.title().should('include', 'GreenKart - veg and fruits kart');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should("have.length", 4);
        cy.get('.search-keyword').clear();
        cy.get('.search-keyword').type('cucumber');
        cy.get('.search-button').click();
        // select get hit url in browser, cypress .get acts like findElement of selenium
        cy.get('.product:visible').should("have.length", 1)
    })

    it('Find selected products!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.title().should('include', 'GreenKart - veg and fruits kart');
        cy.get('.search-keyword').type('ca');
        // parent child chaining
        cy.get('.products').find('.product').should("have.length", 4);
    })

    it('Find and add carrot!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.title().should('include', 'GreenKart - veg and fruits kart');
        cy.get('.search-keyword').type('ca');
        // parent child chaining
        cy.get('.products').find('.product').should("have.length", 4);
        // don't relay on .eq as it can change with time
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    })

    it('Find and add Cashews!', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').each(($el) => {
            const vegName = $el.find('h4.product-name').text();
            if (vegName.includes('Cashews')) {
                cy.wrap($el).find('button').should('be.visible').click();
            }
        })
    })





})
