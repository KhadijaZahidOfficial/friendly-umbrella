/// <reference types="cypress" />
const ProductsPage = require('../page-object/ProductsPage.js');
const testData = require('../support/testData.js');

describe ('To check if items can be added to cart', ()=> {
    const productsPage = new ProductsPage();
        
    beforeEach('Login form', ()=> {
        cy.loginAsStandardUser();
    })
    
    it('Shopping cart', ()=> {
        cy.addItemsToCart(testData.products.defaultProducts);
        productsPage.scrollToShoppingCart();
    })
})