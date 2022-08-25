class BasePage {
  static get url() {
    return "";
  }

  static visit() {
    cy.visit(this.url, { failOnStatusCode: false });
  }


  static get cartBadge(){
    return cy.get('.shopping_cart_badge')
}
  
}

export default BasePage;
