class CheckoutInformationPage {
    get firstNameInput() {
        return cy.get('[placeholder="First Name"][type="text"]');
    }

    get lastNameInput() {
        return cy.get('[placeholder="Last Name"][type="text"]');
    }

    get postalCodeInput() {
        return cy.get('[placeholder="Zip/Postal Code"][type="text"]');
    }

    get continueButton() {
        return cy.get('#continue');
    }

    get headerSecondaryContainer() {
        return cy.get('.header_secondary_container');
    }

    fillFirstName(firstName) {
        this.firstNameInput.type(firstName);
    }

    fillLastName(lastName) {
        this.lastNameInput.type(lastName);
    }

    fillPostalCode(postalCode) {
        this.postalCodeInput.type(postalCode);
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        if (firstName) {
            this.fillFirstName(firstName);
        }
        if (lastName) {
            this.fillLastName(lastName);
        }
        if (postalCode) {
            this.fillPostalCode(postalCode);
        }
    }

    clickContinue() {
        this.continueButton.click();
    }

    submitEmptyForm() {
        this.clickContinue();
    }

    scrollToHeader() {
        this.headerSecondaryContainer.scrollIntoView();
    }
}

module.exports = CheckoutInformationPage;
