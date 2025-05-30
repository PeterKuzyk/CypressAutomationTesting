import ProductPage from "./ProductPage";

class HomePage {

    gotoHomePage(url) {
        cy.visit(url);
    }

    login(strUsername, strPassword) {
        cy.get('#username').type(strUsername);
        cy.get('#password').type(strPassword);
        cy.get('#signInBtn').click();
        return new ProductPage();
    }
}
export default HomePage;
