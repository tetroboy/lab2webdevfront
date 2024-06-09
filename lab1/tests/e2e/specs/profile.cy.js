// cypress/e2e/profile.cy.js

describe('Profile', () => {
    it('should display user profile', () => {
      // Спершу зареєструємо та залогінемо користувача
      cy.visit('http://localhost:8080/register');
  
      cy.get('input[placeholder="Enter name"]').type('John Doe');
      cy.get('input[placeholder="Enter email"]').type('john@example.com');
      cy.get('input[placeholder="Enter password"]').type('password');
      cy.get('button').contains('Register').click();

  
      cy.visit('http://localhost:8080/login');
  
      cy.get('input[placeholder="Enter email"]').type('john@example.com');
      cy.get('input[placeholder="Enter password"]').type('password');
      cy.get('button').contains('Login').click();
  
  
      cy.visit('http://localhost:8080/profile');
  
      cy.get('h2').should('contain', 'User Profile');
      cy.get('div').should('contain', 'John Doe');
      cy.get('div').should('contain', 'john@example.com');
    });
  });
  