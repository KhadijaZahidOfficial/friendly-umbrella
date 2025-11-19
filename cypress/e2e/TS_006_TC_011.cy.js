/// <reference types="cypress" />
const ProductsPage = require('../page-object/ProductsPage.js');
const ProductDetailPage = require('../page-object/ProductDetailPage.js');
const testData = require('../support/testData.js');

describe ('To check if items can be removed from cart via description pages', ()=> {
    const productsPage = new ProductsPage();
    const productDetailPage = new ProductDetailPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.backpack);
    })
    
    it('Shopping cart', ()=> {
        productsPage.clickProductTitle(testData.itemIds.backpack);
        productDetailPage.removeFromCart();
    })
})