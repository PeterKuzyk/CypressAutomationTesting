describe('Section 8 test', () => {

    function openPracticePage() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    }

    beforeEach(() => {
        openPracticePage();
    });

    it('Popups, Assertions', () => {
        // Closing alert by clicking on OK
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        // Assertion on alert text, Cypress will close the alert automatically after validating.
        cy.get('#alertbtn').click();
        cy.on('window:alert', (alertText) => {
            // Validate the expected alert message using Mocha
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge');
        });
    });

    it('Child Windows - removeAttr - target, switching to new URL and do some actions there', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get("#navbarSupportedContent a[href*='about.html']").click();
            cy.get(".mt-50 h2").should('have.text', 'Welcome to QAClick Academy ');
        })
    })

    it('Web Tables find column text and then price using cc selector eq(index).next().then()', () => {
        cy.get('#product').find('tbody tr').should('have.length', 11);

        cy.get(' tr td:nth-child(2)').each(($el, index, $list) => {
            var text = $el.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                   let priceText = price.text();
                   expect(priceText).to.equal('25');
                })
            }
        })
    });

    it('Mouse over', () => {
        cy.get('div .mouse-hover-content ').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    });

    it('Click on hidden elements {force: true} ', () => {
        // clicks on hidden elements without doing mouse over
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');
    });
});
