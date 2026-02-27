describe('Standardization: Auth Module', () => {
  
  // 1. Arrange: Prepare the environment
  beforeEach(() => {
    cy.visit('/') // Defined in your cypress.config.js
  })

  it('Verify successful login for standard_user', () => {
    // 2. Act: Perform actions using robust selectors
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 3. Assert: Verify the outcome (Crucial for US-based team standards)
    // We check the URL and a specific element on the landing page
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('be.visible').and('have.text', 'Products')
  })
})