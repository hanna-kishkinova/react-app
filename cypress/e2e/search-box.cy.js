describe('SearchBox Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should render with initial query', () => {
        cy.get('.search-input')
            .should('exist')
            .and('have.value', 'The Bad Guys 2 (2025)');
    });

    it('should trigger search when clicking the Search button', () => {
        cy.get('.search-input').clear().type('Inception');
        cy.contains('button', 'Search').click();

        cy.contains('Search triggered for: Inception').should('be.visible');
    });

    it('should trigger search when pressing Enter in the input', () => {
        cy.get('.search-input').clear().type('Interstellar{enter}');
        cy.contains('Search triggered for: Interstellar').should('be.visible');
    });
});
