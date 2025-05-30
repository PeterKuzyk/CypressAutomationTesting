
class ConfirmationPage {


    submitUSFormDetails(){
        // example of custom command
        cy.submitUSFormDetails();
    }

    getAlertMessage(){
        return cy.get('.suggestions ul li a').invoke('text');
    }
}

export default ConfirmationPage;
