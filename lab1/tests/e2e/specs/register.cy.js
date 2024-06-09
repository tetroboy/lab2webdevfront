// cypress/e2e/register.cy.js

describe('Register', () => {
    it('should register a new user', () => {
      cy.visit('http://127.0.0.1:8080/register');
  
      cy.get('input[placeholder="Enter name"]').type('John Doe');
      cy.get('input[placeholder="Enter email"]').type('john@example.com');
      cy.get('input[placeholder="Enter password"]').type('password');
      cy.get('button').contains('Register').click();
  
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Registration successful!');
      });

    });
  });
  