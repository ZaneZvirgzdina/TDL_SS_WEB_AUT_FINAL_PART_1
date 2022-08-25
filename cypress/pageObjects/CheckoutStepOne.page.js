import BasePage from "./Base.page";

class CheckoutStepOnePage extends BasePage {

    static get nameField(){
        return cy.get('#first-name')
    }

    static get surnameField(){
        return cy.get('#last-name')
    }

    static get zipCode(){
        return cy.get('#postal-code')
    }

    static get continueBtn(){
        return cy.get('#continue')
    }
}

export default CheckoutStepOnePage