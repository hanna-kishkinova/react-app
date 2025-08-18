import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FIND YOUR MOViE header', () => {
  render(<App />);
  const headerElement = screen.getByText(/FIND YOUR MOViE/i);
  expect(headerElement).toBeInTheDocument();
});
