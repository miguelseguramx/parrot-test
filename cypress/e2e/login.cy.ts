describe('Autentication is working properly', () => {
  it('You can\'t visit a private page without sessión ', () => {
    cy.visit('/')
    cy.location('pathname').should('eq', '/login')
  })
  it('We thown an error if the credentials are incorrect', () => {
    cy.visit('/login')
    cy.get('[data-cy=email]')
      .type(Cypress.env('CREDENTIAL_USER'))
      .should('have.value', Cypress.env('CREDENTIAL_USER'))
    cy.get('[data-cy=password]')
      .type('rfdsg3rtg432')
      .should('have.value', 'rfdsg3rtg432')
    cy.get('[data-cy=login-btn]')
      .click()
    cy.get('[data-cy=login-error]')
      .should('exist')
  })
  it('After a successfull login you are redirected correctly',  () => {
    cy.login(Cypress.env('CREDENTIAL_USER'), Cypress.env('CREDENTIAL_PW'))
    cy.getCookie('next-auth.session-token').should('exist')
  })
})
