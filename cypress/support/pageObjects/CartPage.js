import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    clickCheckout() {
        cy.contains('button', "Checkout").click();
        return new ConfirmationPage();
    }

    sumOfProducts(){

        return cy.get('tr td:nth-child(4) strong').then(($elements) => {
            let sum = 0;

            $elements.each((index, el) => {
                const amount = Number(Cypress.$(el).text().split(" ")[1].trim());
                sum += amount;
            });

            return sum;
        });
    }
}

export default CartPage;
