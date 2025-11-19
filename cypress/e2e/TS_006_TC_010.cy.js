/// <reference types="cypress" />
const ShoppingCartPage = require('../page-object/ShoppingCartPage.js');
const testData = require('../support/testData.js');

describe ('To check if items can be removed from cart', ()=> {
    const shoppingCartPage = new ShoppingCartPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.backpack);
    })
    
    it('Shopping cart', ()=> {
        cy.goToShoppingCart();
        shoppingCartPage.removeItem(testData.products.backpack);
    })
})