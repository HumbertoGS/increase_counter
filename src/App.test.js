import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hooops', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hooops/i);
  expect(linkElement).toBeInTheDocument();
});
