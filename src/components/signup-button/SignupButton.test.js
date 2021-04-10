import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupButton from './SignupButton';

test('render a button', () => {
  render(<SignupButton />);
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});
