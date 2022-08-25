import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }

  static get usernameField() {
    return cy.get("#user-name");
  }

  static get passwordField(){
    return cy.get('#password');
  }

  static get loginBtn(){
    return cy.get('#login-button')
  }

  static get errorMsg(){
    return cy.get('.error-message-container.error')
  }


}

export default LoginPage;
