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
        cy.get('.product:visible').should("have.length",1)
    })
})
