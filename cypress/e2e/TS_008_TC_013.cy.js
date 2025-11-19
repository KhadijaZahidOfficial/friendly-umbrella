/// <reference types="cypress" />
const CheckoutInformationPage = require('../page-object/CheckoutInformationPage.js');
const testData = require('../support/testData.js');

describe ('To check checkout button is functional', ()=> {
    const checkoutInformationPage = new CheckoutInformationPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('SCheckout buttons', ()=> {
        cy.navigateToCheckout();
        checkoutInformationPage.scrollToHeader();
    })
})