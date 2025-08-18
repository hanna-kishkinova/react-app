import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './genre-select';

describe('GenreSelect', () => {
    const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi'];

    test('renders all genres passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre="Action" onSelect={() => {}} />);

        genres.forEach((genre) => {
            expect(screen.getByText(genre)).toBeInTheDocument();
        });
    });

    test('highlights the selected genre passed in props', () => {
        render(<GenreSelect genres={genres} selectedGenre="Comedy" onSelect={() => {}} />);

        const comedyButton = screen.getByText('Comedy');
        expect(comedyButton).toHaveClass('active');

        const actionButton = screen.getByText('Action');
        expect(actionButton).not.toHaveClass('active');
    });

    test('calls onSelect with correct genre after click', () => {
        const handleSelect = jest.fn();
        render(<GenreSelect genres={genres} selectedGenre="Drama" onSelect={handleSelect} />);

        const sciFiButton = screen.getByText('Sci-Fi');
        fireEvent.click(sciFiButton);

        expect(handleSelect).toHaveBeenCalledTimes(1);
        expect(handleSelect).toHaveBeenCalledWith('Sci-Fi');
    });
});
