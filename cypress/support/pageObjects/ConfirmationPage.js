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
}

export default ConfirmationPage;
