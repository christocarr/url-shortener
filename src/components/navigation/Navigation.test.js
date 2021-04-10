import { render, screen, fire, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

test('renders navigation element', () => {
  render(<Navigation />);

  const navigation = screen.getByRole('navigation');

  expect(navigation).toBeInTheDocument();
});
