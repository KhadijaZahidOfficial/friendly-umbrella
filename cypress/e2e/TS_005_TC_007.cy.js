/// <reference types="cypress" />
const ProductsPage = require('../page-object/ProductsPage.js');
const testData = require('../support/testData.js');

describe ('To check if cart with items can be accessed', ()=> {
    const productsPage = new ProductsPage();
        
    beforeEach('Login form', ()=> {
        cy.setupCartWithItems(testData.products.defaultProducts);
    })
    
    it('Shopping cart', ()=> {
        cy.goToShoppingCart();
    })
})