class ConfirmationPage {

    submitUSFormDetails(){
        // example of custom command
        cy.submitUSFormDetails();
    }

    getAlertMessage(){
        return cy.get('.suggestions ul li a').invoke('text');
    }

    clickPurchase(){
        cy.get('.btn-success').click();
    }

    geSuccessMessage(){
        return cy.get('.alert-success').invoke('text');
    }

    // accepts chrome alert
    acceptAlert() {
        cy.on('window:alert', (alertText) => {
            cy.log(`Alert text: ${alertText}`); // Logs the alert text
        });
    };
}

export default ConfirmationPage;
