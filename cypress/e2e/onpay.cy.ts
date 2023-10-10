describe('on payment', () => {
    it('passes', () => {
        cy.visit("http://localhost:3000/tickets/findticket/5218b98f-f3bc-42d4-bbb3-fa33f62ee36e/payment")

        cy.get("button").click()
    })
})