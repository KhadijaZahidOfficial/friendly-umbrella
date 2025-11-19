const LoginPage = require('../page-object/LoginPage.js');
const ProductsPage = require('../page-object/ProductsPage.js');
const ShoppingCartPage = require('../page-object/ShoppingCartPage.js');
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');

Cypress.Commands.add('loginAsStandardUser', () => {
    const loginPage = new LoginPage();
    loginPage.loginAsStandardUser();
});

Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(username, password);
});

Cypress.Commands.add('addItemsToCart', (productNames) => {
    const productsPage = new ProductsPage();
    const items = Array.isArray(productNames) ? productNames : [productNames];
    
    items.forEach(productName => {
        productsPage.addItemToCart(productName);
    });
});

Cypress.Commands.add('setupCartWithItems', (productNames) => {
    cy.loginAsStandardUser();
    cy.addItemsToCart(productNames);
});

Cypress.Commands.add('goToShoppingCart', () => {
    const productsPage = new ProductsPage();
    productsPage.clickShoppingCart();
});

Cypress.Commands.add('goToCheckout', () => {
    const shoppingCartPage = new ShoppingCartPage();
    shoppingCartPage.clickCheckout();
});

Cypress.Commands.add('navigateToCheckout', () => {
    cy.goToShoppingCart();
    cy.goToCheckout();
});

Cypress.Commands.add('fillCheckoutForm', (checkoutData) => {
    const checkoutInformationPage = new CheckoutInformationPage();
    checkoutInformationPage.fillCheckoutForm(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
});

Cypress.Commands.add('completeCheckoutFlow', (checkoutData) => {
    cy.navigateToCheckout();
    cy.fillCheckoutForm(checkoutData);
    const checkoutInformationPage = new CheckoutInformationPage();
    checkoutInformationPage.clickContinue();
});

Cypress.Commands.add('setupCheckoutScenario', (productNames, checkoutData) => {
    cy.setupCartWithItems(productNames);
    cy.completeCheckoutFlow(checkoutData);
});