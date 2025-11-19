/// <reference types="cypress" />
const CheckoutOverviewPage = require('../page-object/CheckoutOverviewPage.js');
const OrderCompletePage = require('../page-object/OrderCompletePage.js');
const testData = require('../support/testData.js');

describe ('Verify order can be placed', ()=> {
    const checkoutOverviewPage = new CheckoutOverviewPage();
    const orderCompletePage = new OrderCompletePage();
        
    beforeEach('Login form', ()=> {
        cy.setupCheckoutScenario(
            testData.products.defaultProducts,
            testData.checkout.valid
        );
    })
    
    it('order', ()=> {
        checkoutOverviewPage.scrollToFinish();
        checkoutOverviewPage.clickFinish();
        orderCompletePage.scrollToCompleteHeader();
    })
})