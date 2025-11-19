class ProductsPage {
    get shoppingCartContainer() {
        return cy.get('#shopping_cart_container');
    }

    get shoppingCartLink() {
        return cy.get('.shopping_cart_link');
    }

    get headerSecondaryContainer() {
        return cy.get('.header_secondary_container');
    }

    getItemTitleLink(itemId) {
        return cy.get(`#item_${itemId}_title_link`);
    }

    getAddToCartButton(productName) {
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        return cy.get(`#add-to-cart-${productId}`);
    }

    getRemoveFromCartButton(productName) {
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        return cy.get(`#remove-${productId}`);
    }

    addItemToCart(productName) {
        this.getAddToCartButton(productName).click();
    }

    removeItemFromCart(productName) {
        this.getRemoveFromCartButton(productName).click();
    }

    clickShoppingCart() {
        this.shoppingCartContainer.click();
    }

    clickProductTitle(itemId) {
        this.getItemTitleLink(itemId).click();
    }

    scrollToHeader() {
        this.headerSecondaryContainer.scrollIntoView();
    }

    scrollToShoppingCart() {
        this.shoppingCartContainer.scrollIntoView();
    }
}

module.exports = ProductsPage;
