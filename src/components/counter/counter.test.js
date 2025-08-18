import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter component', () => {
    test('renders initial value provided in props', () => {
        render(<Counter initialValue={5} />);
        expect(screen.getByText(/Value: 5/i)).toBeInTheDocument();
    });

    test('clicking decrement button decrements the value', () => {
        render(<Counter initialValue={5} />);
        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);
        expect(screen.getByText(/Value: 4/i)).toBeInTheDocument();
    });

    test('clicking increment button increments the value', () => {
        render(<Counter initialValue={5} />);
        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);
        expect(screen.getByText(/Value: 6/i)).toBeInTheDocument();
    });
});
