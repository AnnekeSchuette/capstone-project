/// <reference types="cypress" />
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })

  it('opens the app', () => {
    cy.visit('http://localhost:3000')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.Input__InputField-zwara2-1').clear()
    cy.get('.Input__InputField-zwara2-1').type('Steak{enter}')
    cy.get('.Button__Btn-zkvc2v-0').click()
    /* ==== End Cypress Studio ==== */
  })

  /* === Test Created with Cypress Studio === */
  it('Navigation works', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/')
    cy.get('[href="/wine-recommendation"] > img').click()
    cy.get('[href="/wine-storage"]').click()
    cy.get('[href="/"]').click()
    /* ==== End Cypress Studio ==== */
  })

  /* === Test Created with Cypress Studio === */
  it('get wine recommendation and favour result', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/')
    cy.get('.Input__InputField-zwara2-1').clear()
    cy.get('.Input__InputField-zwara2-1').type('Lobster')
    cy.get('.Button__Btn-zkvc2v-0 > span').click()
    cy.get('.WineCard__ToggleFavButton-oxif9h-1 > svg > path').click()
    cy.get('[href="/wine-storage"] > img').click()
    /* ==== End Cypress Studio ==== */
  })

  /* === Test Created with Cypress Studio === */
  it('form submit enabled after min of 3 characters', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/')
    cy.get('.Input__InputField-zwara2-1').clear()
    cy.get('.Input__InputField-zwara2-1').type('borscht')
    cy.get('.Button__Btn-zkvc2v-0 > span').click()
    /* ==== End Cypress Studio ==== */
  })
})
