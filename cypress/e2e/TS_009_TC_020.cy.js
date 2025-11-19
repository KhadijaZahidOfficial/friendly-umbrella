/// <reference types="cypress" />
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');
const testData = require('../support/testData.js');

describe ('To Check out with invalid last name', ()=> {
    const checkoutInformationPage = new CheckoutInformationPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Checkout buttons', ()=> {
        cy.navigateToCheckout();
        cy.fillCheckoutForm({ 
            firstName: testData.checkout.valid.firstName, 
            lastName: testData.checkout.invalid.lastName, 
            postalCode: testData.checkout.valid.postalCode 
        });
        checkoutInformationPage.scrollToHeader();
        checkoutInformationPage.clickContinue();
    })
})