/// <reference types="cypress" />
const CheckoutOverviewPage = require('../page-object/CheckoutOverviewPage.js');
const testData = require('../support/testData.js');

describe ('Verify order can be cancelled', ()=> {
    const checkoutOverviewPage = new CheckoutOverviewPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCheckoutScenario(
            testData.products.defaultProducts,
            testData.checkout.valid
        );
    })
    
    it('order', ()=> {
        checkoutOverviewPage.clickCancel();
    })
})