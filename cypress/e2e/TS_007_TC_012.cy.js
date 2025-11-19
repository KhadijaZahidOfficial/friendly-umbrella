/// <reference types="cypress" />
const ShoppingCartPage = require('../page-object/ShoppingCartPage.js');
const testData = require('../support/testData.js');

describe ('to remove items from a cart at time of checkout', ()=> {
    const shoppingCartPage = new ShoppingCartPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Shopping cart', ()=> {
        cy.goToShoppingCart();
        shoppingCartPage.removeItem(testData.products.backpack);
    })
})