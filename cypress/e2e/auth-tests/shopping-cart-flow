describe('Inventory Module: Cart Functionality', () => {
  
  beforeEach(() => {
    // Standard login before each cart test
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Should add the Sauce Labs Backpack to the cart', () => {
    // 1. Click "Add to cart" for the backpack
    // HINT: Inspect the button to find the data-test attribute
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // 2. Assert: Check if the cart badge updates to "1"
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
  })
})