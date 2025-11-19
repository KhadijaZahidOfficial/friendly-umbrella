class OrderCompletePage {
    get completeHeader() {
        return cy.get('.complete-header');
    }

    scrollToCompleteHeader() {
        this.completeHeader.scrollIntoView();
    }
}

module.exports = OrderCompletePage;
