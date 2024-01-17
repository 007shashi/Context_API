describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[class="header"]').should('exist')
    .should('have.text', 'Context API');

    cy.get('[class="value"]').should('exist')
    .should('have.text', 'Default Value');

    cy.get('[class="valueButton"]').click();
    cy.get('[class="value"]').should('exist')
    .should('have.text', 'New Value')
    .should('have.css', 'color', 'rgb(255, 0, 0)');
 
    cy.get('[class="valueButton"]').should('exist');

});
});
// // cypress/integration/context_api_spec.js

// describe('Context API Demo', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });

// it('should render with default value', () => {
// cy.get('[class="value"]').should('contain', 'Default Value');
// });

// it('should change value on button click', () => {
//   cy.get('.valueButton').click();
//   cy.get('p').should('have.text', 'New Value');
// });

// it('should change color on button click', () => {
//   cy.get('.valueButton').click();
//   cy.get('p').should('have.css', 'color', 'rgb(255, 0, 0)'); // Check if the color is red