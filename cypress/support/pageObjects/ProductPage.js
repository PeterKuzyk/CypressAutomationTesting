import CartPage from "./CartPage";

class ProductPage {


    pageValidation() {
        cy.contains('Shop Name').should('be.visible');
    }

    verifyCardLimit(){
        cy.get('app-card').should('have.length', 4);
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1);
                cy.wrap($element).find('button').click();
            });
    }

    selectFirstProduct(){
        cy.get('app-card').eq(0).find('button').click();

    }

    goToCart(){
        cy.contains('a', "Checkout").click();
        return new CartPage();
    }
}

export default ProductPage;
