describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get("a[href='/auth/register']").click()
    
    cy.url().should("include", "/auth/register")

    cy.get("h1").contains("Register")

    cy.get("a[href='/auth/login']").click()

    cy.url().should("include", "/auth/login")

    cy.get("h1").contains("Login")

    cy.get("input[name='email']").type("woodbird123@yahoo.com")
    cy.get("input[name='password']").type("Woodbird123(!)")

    cy.get("button").click()

    cy.url().should("include", "/")

    cy.get("button[class='logout']").click();
    cy.get("h1").contains("Login")

    cy.on("uncaught:exception", () => {
      return false
    })
  })
})