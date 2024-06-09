// cypress/e2e/login.cy.js

describe('Login', () => {
  it('should log in with correct credentials', () => {
    // Спершу зареєструємо користувача, щоб перевірити логін
    cy.visit('http://127.0.0.1:8080/register');
    cy.get('input[placeholder="Enter name"]').type('John Doe');
    cy.get('input[placeholder="Enter email"]').type('john@example.com');
    cy.get('input[placeholder="Enter password"]').type('password');
    cy.get('button').contains('Register').click();


    cy.visit('http://127.0.0.1:8080/login');

    cy.get('input[placeholder="Enter email"]').type('john@example.com');
    cy.get('input[placeholder="Enter password"]').type('password');
    cy.get('button').contains('Login').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login successful!');
    });
  });
});
