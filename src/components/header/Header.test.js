import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('render the header with logo and navigation', () => {
  render(<Header />);

  const banner = screen.getByRole('banner');
  const logo = screen.getByRole('img');
  const navigation = screen.getByRole('navigation');
  const list = screen.getByRole('list');
  const menu = screen.getByRole('menuitemradio');

  expect(banner).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'shortly logo');
  expect(navigation).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(menu).toBeInTheDocument();

  expect(navigation).toContainHTML('ul');
  expect(list).toContainHTML('li');
});
