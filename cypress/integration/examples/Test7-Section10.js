describe('E2E ecommerce Flow', () => {

    function loginToPracticePage() {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.get('#signInBtn').click();
    }

    const productName = 'Nokia Edge';

    it('Updated E2E test flow', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        // The login data is public and can be added to GitHub
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.get('#signInBtn').click();
        // or
        //cy.contains('Sign in').click();
        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').should('have.length', 4);
        cy.exec('git status').its('stdout')
            .should('contain', 'modified:')
    })

    it('Example using .filter() ', () => {
        loginToPracticePage();
        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1);
                // example of doing click using contains()
                //cy.wrap($element).contains('button', 'Add').click();
                cy.wrap($element).find('button').click();
            });
    });

    it('Add two items to the cart, split() trim() text, convert text to number', () => {
        let sum = 0;

        loginToPracticePage();
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1);
                cy.wrap($element).find('button').click();
            });
        cy.get('app-card').eq(0).find('button').click();
        cy.contains('a', "Checkout").click();

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = Number($el.text().split(" ")[1].trim());
            sum = sum + amount;
            cy.log(sum)
        }).then(function () {
            expect(sum).to.be.lessThan(200000);
        });
    });

    it('Complete(E2E) - Checkout from the cart, verify Nokia is in the cat, complete purchase', () => {
        loginToPracticePage();
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1);
                cy.wrap($element).find('button').click();
            });
        cy.contains('a', "Checkout").click();
        cy.get('tr td h4').should('contain', `${productName}`);
        cy.contains('button', "Checkout").click();
        cy.get('#country').type('United States');
        cy.get('.suggestions ul li a', { timeout: 10000 })
            .should('contain.text', 'United States of America');
        cy.get('.suggestions ul li a').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain', 'Success');
    })
})
