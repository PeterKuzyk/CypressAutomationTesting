import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    clickCheckout() {
        cy.contains('button', "Checkout").click();
        return new ConfirmationPage();

    }

    sumOfProducts(){
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = Number($el.text().split(" ")[1].trim());
            sum = sum + amount;
        })
           return sum;
    }
}

export default CartPage;
