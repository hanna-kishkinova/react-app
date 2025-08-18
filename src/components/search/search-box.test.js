import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from "./search-box";

describe('SearchBox component', () => {
    test('renders initial value provided in props', () => {
        render(<SearchBox initialQuery={'some test text'} />);
        expect(screen.getByDisplayValue('some test text')).toBeInTheDocument();
    });

    test('calls onSearch with input value after typing and clicking Search button', () => {
        const handleSearch = jest.fn();
        render(<SearchBox initialQuery="" onSearch={handleSearch} />);

        const input = screen.getByPlaceholderText(/what do you want to watch\?/i);
        const button = screen.getByText(/search/i);

        fireEvent.change(input, { target: { value: 'Inception' } });
        fireEvent.click(button);

        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith('Inception');
    });

    test('calls onSearch with input value after typing and pressing Enter', () => {
        const handleSearch = jest.fn();
        render(<SearchBox initialQuery="" onSearch={handleSearch} />);

        const input = screen.getByPlaceholderText(/what do you want to watch\?/i);
        fireEvent.change(input, { target: { value: 'Interstellar' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(handleSearch).toHaveBeenCalledTimes(1);
        expect(handleSearch).toHaveBeenCalledWith('Interstellar');
    });
});
