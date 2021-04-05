import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UrlShortenerForm from './UrlShortenerForm';

it('renders a form', () => {
  const { container } = render(<UrlShortenerForm />);
  expect(container).toBeTruthy();
});
