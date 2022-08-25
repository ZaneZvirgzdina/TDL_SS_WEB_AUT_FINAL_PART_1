import BasePage from "./Base.page";

class CheckoutStepTwoPage extends BasePage {

static get itemDescription(){
    return cy.get('.inventory_item_name')
}

static get finishBtn(){
    return cy.get('#finish')
}

}

export default CheckoutStepTwoPage