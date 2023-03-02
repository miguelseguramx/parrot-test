describe('The products are working correctly', () => {

  beforeEach(() => {
    cy.login(Cypress.env('CREDENTIAL_USER'), Cypress.env('CREDENTIAL_PW'))
    cy.visit('/')
  })

  it('The products sections are working propertly', () => {
    cy.get('[data-cy=product-category]')
      .should('exist')
    cy.get('[data-cy=product-item]')
      .should('exist')
  })

  it('You can update the availabilty of a product', () => {
    cy.intercept({
      method: 'PUT',
      url: '**/availability',
    }).as('updateAvailability')
    cy.get(':checked').first().should('be.checked').uncheck({ force: true })
    cy.wait('@updateAvailability').then(({response}) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body.result.availability).to.eq('UNAVAILABLE')
    })
  })

})