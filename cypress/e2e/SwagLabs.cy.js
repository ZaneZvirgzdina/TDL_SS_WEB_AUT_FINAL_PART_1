import BasePage from "../pageObjects/Base.page";
import CartPage from "../pageObjects/Cart.page";
import CheckoutCompletePage from "../pageObjects/CheckoutComplete.page";
import CheckoutStepOnePage from "../pageObjects/CheckoutStepOne.page";
import CheckoutStepTwoPage from "../pageObjects/CheckoutStepTwo.page";
import InventoryPage from "../pageObjects/Inventory.page";
import InventoryItemPage from "../pageObjects/InventoryItem.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  context('Swag Labs functionality testing', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

 function logInStndUser(){
  LoginPage.usernameField.click();
  LoginPage.usernameField.type('standard_user');
  LoginPage.passwordField.click();
  LoginPage.passwordField.type('secret_sauce');
  LoginPage.loginBtn.click();
 }

 function addToCart(itemName){
    // - Open “Sauce Labs Bolt T-Shirt”
    InventoryPage.itemDescription.contains(itemName).click();
    // - Click “Add to cart”
    InventoryItemPage.addToCartBtn.click();
 }
 

  // Scenario 1 - Login with locked_out_user
  it("Login with locked_out_user", () => {
    // - Enter username - “locked_out_user”
    LoginPage.usernameField.click();
    LoginPage.usernameField.type('locked_out_user');
    // - Enter password
    LoginPage.passwordField.click();
    LoginPage.passwordField.type('secret_sauce');
    LoginPage.loginBtn.click();
    // - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”
    LoginPage.errorMsg.should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });


  // Scenario 2 - Login with wrong password
  it('Login with wrong password', () =>{
    // - Enter username - standard_user
    LoginPage.usernameField.click();
    LoginPage.usernameField.type('standard_user');
    // - Enter a wrong password
    LoginPage.passwordField.click();
    LoginPage.passwordField.type('secret_sauces');
    LoginPage.loginBtn.click();
    // - Validate that user sees error - “Epic sadface: Username and password do not match any user in this service”
    LoginPage.errorMsg.should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  // Scenario 3 - Validate item amount
  it('Validate item amount', () => {
  // - Log into page with standard user credentials
  logInStndUser();
  // - Validate that default item amount is 6
    InventoryPage.itemGrid.should('have.length', 6);
  })

  // Scenario 4 - Sort items - Price high to low
  it('Sort items - Price high to low', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Set filter to Price high to low
    InventoryPage.filterSlct.select('Price (high to low)');
    // - Validate that first item is “Sauce Labs Fleece Jacket”
    InventoryPage.firstItem.should('contain.text', 'Sauce Labs Fleece Jacket');
    // - Validate that the first item costs “$49.99”
    InventoryPage.firstItemPrice.should('contain.text', '$49.99');
  })
  
   // Scenario 5 - Sort items - Price low to High
  it('Sort items - Price low to High', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Set filter to Price low to high
    InventoryPage.filterSlct.select('Price (low to high)');
    // - Validate that first item is “Sauce Labs Onesie”
    InventoryPage.firstItem.should('contain.text', 'Sauce Labs Onesie');
    // - Validate that the first item costs “$7.99”
    InventoryPage.firstItemPrice.should('contain.text', '$7.99');
  })
 
    // Scenario 6 - Sort items - Name (Z to A)
  it('Sort items - Name (Z to A)', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Set filter to Name (Z to A)
    InventoryPage.filterSlct.select('Name (Z to A)');
    // - Validate that first item is “Test.allTheThings() T-Shirt (Red)”
    InventoryPage.firstItem.should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
  })

  // Scenario 7 - Validate shopping cart badge amount
  it('Validate shopping cart badge amount', () => {
      // - Log into page with standard user credentials
    logInStndUser();
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart“
    addToCart("Sauce Labs Bolt T-Shirt");
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    BasePage.cartBadge.should('have.text', 1);
    // - Click “Back to products”
    InventoryItemPage.bckToProductsBtn.click();
    // - Open “Sauce Labs Bike Light”
    // - Click “Add to cart”
    addToCart("Sauce Labs Bike Light");
    // - Validate that shoping cart badge is 2 (the red pop-up number)
    BasePage.cartBadge.should('have.text', 2);
  })

  // Scenario 8 - Reset App State
  it('Reset App State', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart”
    addToCart("Sauce Labs Bolt T-Shirt");
    // - Click “Back to products”
    InventoryItemPage.bckToProductsBtn.click();
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    BasePage.cartBadge.should('have.text', 1);
    // - Click “Stack/Burger” icon
    InventoryItemPage.burgerBtn.click();
    // - Click “Reset App State”
    InventoryItemPage.resetAppBtn.click();
    // - Validate that the badge no longer exists
    BasePage.cartBadge.should('not.exist');
  })

  // Scenario 9 - Validate shopping cart remove button functionality
  it('Validate shopping cart remove button functionality', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Open “Sauce Labs Bolt T-Shirt”
    // - Click “Add to cart”
    addToCart("Sauce Labs Bolt T-Shirt");
    // - Validate that shoping cart badge is 1 (the red pop-up number)
    BasePage.cartBadge.should('have.text', 1);
    // -  Click “Remove” button
    InventoryItemPage.removeBtn.click();
    // - Validate that the badge no longer exists
    BasePage.cartBadge.should('not.exist');
  })

  // Scenario 10 - Buy a T-shirt
  it('Buy a T-shirt', () => {
    // - Log into page with standard user credentials
    logInStndUser();
    // - Open “Test.allTheThings() T-Shirt (Red)”
    // - Click “Add to cart”
    addToCart("Test.allTheThings() T-Shirt (Red)");
    // - Click “Shopping cart”
    InventoryItemPage.cartIcon.click();
    // - Click “Checkout”
    CartPage.checkoutBtn.click();
    // - Fill in First name
    CheckoutStepOnePage.nameField.click();
    CheckoutStepOnePage.nameField.type('Zane');
    // - Fill in Last name
    CheckoutStepOnePage.surnameField.click();
    CheckoutStepOnePage.surnameField.type('Mazenko');
    // - Fill in ZIP/Postal code
    CheckoutStepOnePage.zipCode.click();
    CheckoutStepOnePage.zipCode.type(1010);
    // - Click Continue
    CheckoutStepOnePage.continueBtn.click();
    // - Validate item name “Test.allTheThings() T-Shirt (Red)”
    CheckoutStepTwoPage.itemDescription.should('have.text', 'Test.allTheThings() T-Shirt (Red)');
    // - Click “Finnish”
    CheckoutStepTwoPage.finishBtn.click();
    // - Validate header “THANK YOU FOR YOUR ORDER”
    CheckoutCompletePage.completeMsg.should('have.text','THANK YOU FOR YOUR ORDER');
  })


  })
});
