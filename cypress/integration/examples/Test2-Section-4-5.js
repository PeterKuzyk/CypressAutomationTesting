describe("Test2", function() {
    it('Explanation of Wait and why limit of using it', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
    });
})
