class LoginPage {
    get usernameInput() {
        return cy.get('input[placeholder="Username"]');
    }

    get passwordInput() {
        return cy.get('[placeholder="Password"][type="password"]');
    }

    get loginButton() {
        return cy.get('#login-button');
    }

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    loginAsStandardUser() {
        this.visit();
        const username = Cypress.env('username') || 'standard_user';
        const password = Cypress.env('password') || 'secret_sauce';
        this.login(username, password);
    }
}

module.exports = LoginPage;
