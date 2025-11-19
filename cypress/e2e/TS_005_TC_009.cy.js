/// <reference types="cypress" />
const ProductsPage = require('../page-object/ProductsPage.js');
const ProductDetailPage = require('../page-object/ProductDetailPage.js');
const testData = require('../support/testData.js');

describe ('To check if items can be added to cart via description pages', ()=> {
    const productsPage = new ProductsPage();
    const productDetailPage = new ProductDetailPage();
        
    beforeEach('Login form', ()=> {
        cy.loginAsStandardUser();
    })
    
    it('Shopping cart', ()=> {
        productsPage.clickProductTitle(testData.itemIds.backpack);
        productDetailPage.addToCart();
    })
})