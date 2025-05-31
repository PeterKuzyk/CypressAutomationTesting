import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from "../../support/pageObjects/ProductPage";
import CartPage from "../../support/pageObjects/CartPage";
import ConfirmationPage from "../../support/pageObjects/ConfirmationPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const confirmationPage = new ConfirmationPage();

describe('Working with fixtures', () => {

    // Load the fixture data before all tests
    beforeEach(function () {
        cy.fixture('example').then((data) => {
            this.data = data;
        });
    });

    it('Get data from fixture file', function () {
        const product = this.data.productName;
        // Visit the login page
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');

        // Login using fixture data
        cy.get('#username').type(this.data.username);
        cy.get('#password').type(this.data.password);
        cy.get('#signInBtn').click();

        // Verify the dashboard element
        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').filter(`:contains("${product}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1);
                // example of doing click using contains()
                //cy.wrap($element).contains('button', 'Add').click();
                cy.wrap($element).find('button').click();
            });
    });

    it('Example of increased wait time ', function () {
        // add in on the beginning of it block or before the step
        Cypress.config('defaultCommandTimeout', 10000);
    });

    it('Using POM and custom function', function () {

        const product = this.data.productName;
        homePage.gotoHomePage("https://rahulshettyacademy.com/loginpagePractise/#/")
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
        confirmationPage.clickPurchase();
        confirmationPage.geSuccessMessage().then(message => {
            expect(message).to.contain('Success!');
        })
    })
});
