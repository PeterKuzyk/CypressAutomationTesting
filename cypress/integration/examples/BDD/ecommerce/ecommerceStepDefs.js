import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import data from "../../../../fixtures/example.json";
import ProductPage from "../../../../support/pageObjects/ProductPage";
import CartPage from "../../../../support/pageObjects/CartPage";
import ConfirmationPage from "../../../../support/pageObjects/ConfirmationPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const confirmationPage = new ConfirmationPage();

Given(/^I am on Ecommerce page$/, function () {
    // For clarity while learning, this is a hardcoded. It will be updated later to be more dynamic!
    homePage.gotoHomePage(Cypress.env('url') + "/loginpagePractise/");
});

When(/^I login to the application$/, function () {
    homePage.login(data.username, data.password);
});

When(/^I login to the application portal$/, function (dataTable) {
    // bad idea using it this way, it limits you to only one option of data
    homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
});

When(/^I login to the application Portal using (.*) and (.*)$/, function (username, password) {
    homePage.login(username, password);
});

When(/^I add items to Card and checkout$/, function () {
    productPage.selectProduct(data.productName);
    productPage.selectFirstProduct();
});

When(/^I select the country and submit$/, function () {
    cartPage.clickCheckout();
    confirmationPage.submitUSFormDetails();
    confirmationPage.getAlertMessage().then((message) => {
        // For clarity while learning, this is a hardcoded. It will be updated later to be more dynamic!
        expect(message).to.include('United States of America');
    });
    confirmationPage.clickPurchase();
});

Then(/^I should total price limits$/, function () {
    productPage.goToCart();
    cartPage.sumOfProducts().then((sum) => {
        // For clarity while learning, this is a hardcoded. It will be updated later to be more dynamic!
        expect(sum).to.be.lessThan(200000);
        confirmationPage.acceptAlert();
    });
});

Then(/^I should see the Thank You$/, function () {
    confirmationPage.geSuccessMessage().then(message => {
        // For clarity while learning, this is a hardcoded. It will be updated later to be more dynamic!
        expect(message).to.contain('Success!');

    })
});
