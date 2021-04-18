/// <reference types="cypress" />

describe('Dish Pairing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(375, 667)
    cy.get('[href="/dish-pairing"]').click()
  })
  describe('Search by Wine type', () => {
    it('Form submit is disabled initially and gets enabled, if more than 3 characters are entered', () => {
      cy.get('form').within(() => {
        cy.get('button').should('be.disabled')
        cy.get('input').type('Ri')
        cy.get('button').should('be.disabled')
        cy.get('input').clear()
        cy.get('input').type('Riesling')
        cy.get('button').should('be.enabled').click()
      })
    })
  })
})
