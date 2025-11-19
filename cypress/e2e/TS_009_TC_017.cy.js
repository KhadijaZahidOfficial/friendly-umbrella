/// <reference types="cypress" />
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');
const testData = require('../support/testData.js');

describe ('To Check out with valid postalcode', ()=> {
    const checkoutInformationPage = new CheckoutInformationPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Checkout buttons', ()=> {
        cy.navigateToCheckout();
        cy.fillCheckoutForm(testData.checkout.valid);
        checkoutInformationPage.scrollToHeader();
        checkoutInformationPage.clickContinue();
    })
})