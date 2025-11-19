class ProductDetailPage {
    get addToCartButton() {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }

    get removeFromCartButton() {
        return cy.get('#remove-sauce-labs-backpack');
    }

    addToCart() {
        this.addToCartButton.click();
    }

    removeFromCart() {
        this.removeFromCartButton.click();
    }

    getAddToCartButtonByProduct(productName) {
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        return cy.get(`#add-to-cart-${productId}`);
    }

    getRemoveFromCartButtonByProduct(productName) {
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        return cy.get(`#remove-${productId}`);
    }

    addProductToCart(productName) {
        this.getAddToCartButtonByProduct(productName).click();
    }

    removeProductFromCart(productName) {
        this.getRemoveFromCartButtonByProduct(productName).click();
    }
}

module.exports = ProductDetailPage;
