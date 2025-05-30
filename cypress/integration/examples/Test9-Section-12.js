import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from "../../support/pageObjects/ProductPage";
import CartPage from "../../support/pageObjects/CartPage";
import ConfirmationPage from "../../support/pageObjects/ConfirmationPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const confirmationPage = new ConfirmationPage();

describe('Environment variables & Reports', () => {

    beforeEach(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
        });
    });

    it('Environment variables - url', function () {

        const product = this.data.productName;
        homePage.gotoHomePage(Cypress.env('url') + "/loginpagePractise/");
        homePage.login(this.data.username, this.data.password);
        productPage.pageValidation();
        productPage.verifyCardLimit();
        productPage.selectProduct(product);
        productPage.selectFirstProduct();
        productPage.goToCart();
        cartPage.sumOfProducts().then((sum) => {
            expect(sum).to.be.lessThan(200000);
        });
        cartPage.clickCheckout();
        confirmationPage.submitUSFormDetails();
        confirmationPage.getAlertMessage().then((message) => {
            expect(message).to.include('United States of America'); // Correct assertion syntax
        });
    })

    it('Reports', () => {


    })
})
