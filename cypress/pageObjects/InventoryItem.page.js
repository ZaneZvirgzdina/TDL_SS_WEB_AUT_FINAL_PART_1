import BasePage from "./Base.page";

class InventoryItemPage extends BasePage {

    static get addToCartBolt(){
        return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    }


    static get bckToProductsBtn(){
        return cy.get('#back-to-products')
    }

    static get addToCartLight(){
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    static get burgerBtn(){
        return cy.get('#react-burger-menu-btn')
    }

    static get resetAppBtn(){
        return cy.get('#reset_sidebar_link')
    }

    static get removeBtn(){
        return cy.get('#remove-sauce-labs-bolt-t-shirt')
    }

    static get addToCartBtn(){
        return cy.get('.btn.btn_primary.btn_small.btn_inventory')
    }

    static get cartIcon(){
        return cy.get('.shopping_cart_link')
    }
}

export default InventoryItemPage