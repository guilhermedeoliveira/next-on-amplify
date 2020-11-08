/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should get `Home` text', () => {
    cy.contains('Home').should('be.visible')
  })
})
