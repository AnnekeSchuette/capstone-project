/// <reference types="cypress" />

describe('Wine Recommendations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(375, 667)
    cy.get('[href="/wine"]').click()
  })
  describe('Search by Dish', () => {
    it('Form submit is disabled initially and gets enabled, if more than 3 characters are entered', () => {
      cy.get('form').within(() => {
        cy.get('button').should('be.disabled')
        cy.get('input').type('St')
        cy.get('button').should('be.disabled')
        cy.get('input').clear()
        cy.get('input').type('Steak')
        cy.get('button').should('be.enabled').click()
      })
    })
  })
})
