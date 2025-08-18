describe('GenreSelect Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should render with initial query', () => {
        const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];

        cy.get('.genre-select-component')
            .within(() => {
                genres.forEach((genre) => {
                    cy.contains('button', genre).should('exist');
                });
            });
    });

    it('highlights the selected genre', () => {
        cy.get('.genre-select-component button.active')
            .should('have.text', 'Action')
            .and('have.class', 'active');
    });

    it('calls onSelect when clicking a genre', () => {
        cy.contains('button', 'Drama').click();
        cy.contains('button', 'Drama')
            .should('have.class', 'active');
    });
});
