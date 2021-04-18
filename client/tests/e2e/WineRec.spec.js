/// <reference types="cypress" />
/* const detailLink = 'a[href*="/wine/detail/"]'
const favButton = 'button[role="switch"]' */

function submitDish(dish) {
  cy.get('form').within(() => {
    cy.get('input').type(dish)
    cy.get('button').click()
  })
}

describe('Wine Recommendations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(375, 667)
    cy.get('[href="/wine"]').click()
  })

  describe('Get Wine Recommendation by dish', () => {
    it('initially shows a disabled button which gets enabled, if more than 3 characters are entered', () => {
      cy.get('form').within(() => {
        cy.get('button').should('be.disabled')
        cy.get('input').type('St')
        cy.get('button').should('be.disabled')
        cy.get('input').clear()
        cy.get('input').type('Steak')
        cy.get('button').should('be.enabled')
      })
    })

    it('submits form by hitting enter', () => {
      cy.get('form').within(() => {
        cy.get('input').type('Steak{enter}')
      })
      cy.url().should('include', '/wine/recommendation/Steak')
    })

    it('submits form on button click', () => {
      submitDish('Steak')
      cy.url().should('include', '/wine/recommendation/Steak')
    })

    it('redirects to the wine recommendation page, when form is submitted', () => {
      submitDish('Steak')
      cy.url().should('include', '/wine/recommendation/Steak')
    })

    it('redirects to the respective wine detail page, when wine card is clicked', () => {
      submitDish('Steak')
      cy.get('a[href*="/wine/detail/"]').click()
      cy.url().should('include', '/wine/detail/')
    })
  })
})
