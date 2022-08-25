import BasePage from "./Base.page";

class InventoryPage extends BasePage {

    static get itemGrid(){
        return cy.get('.inventory_item_description')
       }

    static get filterSlct(){
        return cy.get('.product_sort_container')
    }

    static get firstItem(){
        return cy.get(':nth-child(1) > .inventory_item_description')
    }

    static get firstItemPrice(){
        return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
    }

    static get itemDescription(){
        return cy.get('.inventory_item_name')
    }

    
}

export default InventoryPage