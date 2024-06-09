// tests/e2e/specs/wordList.spec.js
describe('WordList', () => {
    it('displays words correctly', () => {
      cy.visit('http://localhost:8080/')
      cy.get('input').type('apple');
      cy.get('button').contains('Add').click();
      cy.get('input').clear().type('banana');
      cy.get('button').contains('Add').click();
      cy.get('li').should('contain', 'apple')
      cy.get('li').should('contain', 'banana')
    })
  })
  