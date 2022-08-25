import BasePage from "./Base.page";

class CheckoutCompletePage extends BasePage {


    static get completeMsg(){
        return cy.get('.complete-header')
    }
    

}

export default CheckoutCompletePage