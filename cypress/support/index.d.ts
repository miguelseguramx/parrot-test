/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
      /**
       * Custom command to login with email and password
       * @example cy.login()
       */
      login(email: string, password: string): Chainable<null>;
  }
}