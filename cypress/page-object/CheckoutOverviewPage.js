class CheckoutOverviewPage {
    get finishButton() {
        return cy.get('#finish');
    }

    get cancelButton() {
        return cy.get('#cancel');
    }

    clickFinish() {
        this.finishButton.click();
    }

    clickCancel() {
        this.cancelButton.click();
    }

    scrollToFinish() {
        this.finishButton.scrollIntoView();
    }
}

module.exports = CheckoutOverviewPage;
