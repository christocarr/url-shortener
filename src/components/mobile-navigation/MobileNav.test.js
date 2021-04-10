import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileNav from './MobileNav';

test('renders navigation element', () => {
  render(<MobileNav />);

  const navigation = screen.getByRole('navigation');
  const menu = screen.getByRole('menu');

  expect(menu).toBeInTheDocument();
  expect(navigation).toContainHTML('ul');
});
