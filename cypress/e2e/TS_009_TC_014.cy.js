/// <reference types="cypress" />
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');
const testData = require('../support/testData.js');

describe ('To check if empty checkout form is submitted', ()=> {
    const checkoutInformationPage = new CheckoutInformationPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Checkout buttons', ()=> {
        cy.navigateToCheckout();
        checkoutInformationPage.submitEmptyForm();
        checkoutInformationPage.scrollToHeader();
    })
})