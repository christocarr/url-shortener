import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('render the header with logo and navigation', () => {
  render(<Header />);

  const banner = screen.getByRole('banner');
  const logo = screen.getByRole('img');

  expect(banner).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'shortly logo');
});
