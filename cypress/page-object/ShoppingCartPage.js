class ShoppingCartPage {
    get checkoutButton() {
        return cy.get('#checkout');
    }

    getRemoveButton(productName) {
        const productId = productName.toLowerCase().replace(/\s+/g, '-');
        return cy.get(`#remove-${productId}`);
    }

    clickCheckout() {
        this.checkoutButton.click();
    }

    removeItem(productName) {
        this.getRemoveButton(productName).click();
    }
}

module.exports = ShoppingCartPage;
