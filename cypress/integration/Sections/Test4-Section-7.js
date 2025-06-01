describe('Test4 Section 7', () => {

    function openPracticePage() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    }

    beforeEach(() => {
        openPracticePage();
    })

    it('Use method check() , should(), and()', () => {
        // incorrect way of doing assertion
        //cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption1').should('be.checked');
        // or
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption1').should('be.checked').and('have.value', 'option1');
        // or
        cy.get('#checkBoxOption1').check().then(($checkbox) => {
            expect($checkbox).to.be.checked;
        });
    })

    it('Use method uncheck() , should()', () => {
        cy.get('#checkBoxOption1').check();
        cy.get('#checkBoxOption1').should('be.checked');
        cy.get('#checkBoxOption1').uncheck();
        cy.get('#checkBoxOption1').should('not.be.checked');
    })

    it('Check multiple checkboxes', () => {
        cy.get("input[type='checkbox']").check(['option2', 'option2']);
    })

    it('Static dropdowns - using select()', () => {
        cy.get('select').select('option2');
        cy.get('select').should('have.value', 'option2');
    });

    it('Dynamic dropdowns', () => {
        cy.get("#autocomplete").type("ind");
        // find all elements that contain "ind" find India and click on it
        cy.get(".ui-menu-item div ").each(($el) => {
            if ($el.text() === "India") {
                cy.wrap($el).click();
            }
        })
        cy.get("#autocomplete").should('have.value', 'India');
    });

    it('Verify visibility using Chai assertions', () => {
        cy.get("#displayed-text").should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    });

    it('Radio buttons - works the same as checkboxes', () => {
        cy.get('input[value=\'radio1\']').check();
        cy.get('input[value=\'radio1\']').should('be.checked');
    })
})
