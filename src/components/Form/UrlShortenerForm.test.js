import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import UrlShortenerForm from './UrlShortenerForm';

describe('the form', () => {
  it('renders with text input and button', () => {
    const { container, queryByTestId } = render(<UrlShortenerForm />);
    expect(container).toBeTruthy();
    expect(queryByTestId('url-input')).toBeTruthy();
    expect(queryByTestId('shorten-url-button')).toBeTruthy();
  });

  test('input has text entered', () => {
    render(<UrlShortenerForm />);
    fireEvent.change(screen.getByPlaceholderText('Shorten a link here...'), {
      target: { value: 'url text' },
    });
    expect(screen.getByPlaceholderText('Shorten a link here...').value).toBe(
      'url text'
    );
  });

  test('submit form', async () => {
    render(<UrlShortenerForm />);

    const submitButton = screen.getByRole('button', { type: 'submit' });

    await waitFor(() => fireEvent.click(submitButton));

    expect(screen.getByPlaceholderText('Shorten a link here...').value).toBe(
      ''
    );
  });
});
