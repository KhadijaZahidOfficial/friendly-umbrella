/// <reference types="cypress" />
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');
const testData = require('../support/testData.js');

describe ('To Check out with valid last name', ()=> {
    const checkoutInformationPage = new CheckoutInformationPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Checkout buttons', ()=> {
        cy.navigateToCheckout();
        checkoutInformationPage.fillFirstName(testData.checkout.valid.firstName);
        checkoutInformationPage.fillLastName(testData.checkout.valid.lastName);
        checkoutInformationPage.clickContinue();
        checkoutInformationPage.scrollToHeader();
    })
})