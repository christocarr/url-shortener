# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

- Shorten any valid URL

- See a list of their shortened links, even after refreshing the browser

- Copy the shortened link to their clipboard in a single click

- Receive an error message when the `form` is submitted if:

- The `input` field is empty

### Screenshot

![screenshot of finished challenge](./screenshot.jpg?raw=true)

### Links

- Live Site URL: [Add live site URL here](https://cc-url-shortener.vercel.app)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties

- Flexbox

- Mobile-first workflow

- [React](https://reactjs.org/) - JS library

- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - for styles

### What I learned

I learned testing library, Jest, and the TDD technique to do DOM element testing on some components.

```js
test('submit form', async () => {
  render(<UrlShortenerForm />);

  const submitButton = screen.getByRole('button', { type: 'submit' });

  await waitFor(() => fireEvent.click(submitButton));

  expect(screen.getByPlaceholderText('Shorten a link here...').value).toBe('');
});
```

### Continued development

As I continue working on personal projects I plan to improve my React testing skills by using test driven development methods.

### Useful resources

- [ARIA](https://www.digitala11y.com/wai-aria-1-1-cheat-sheet/) - A cheatsheet that helped me get elements by ARIA role; the most preferred method of getting DOM elements.

- [testing-library](https://testing-library.com/docs/dom-testing-library/cheatsheet) - A good resource to find what testing-library query to use when.

## Author

- Website - [Chris](https://www.iamchriscarr.com)

- Frontend Mentor - [@christocarr](https://www.frontendmentor.io/profile/christocarr)

# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

- Shorten any valid URL

- See a list of their shortened links, even after refreshing the browser

- Copy the shortened link to their clipboard in a single click

- Receive an error message when the `form` is submitted if:

- The `input` field is empty

### Screenshot

![screenshot of finished challenge](./screenshot.jpg?raw=true)

### Links

- Live Site URL: [url-shortener](https://cc-url-shortener.vercel.app)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties

- Flexbox

- Mobile-first workflow

- [React](https://reactjs.org/) - JS library

- [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - for styles

### What I learned

I learned testing library, Jest, and the TDD technique to do DOM element testing on some components.

```js
test('submit form', async () => {
  render(<UrlShortenerForm />);

  const submitButton = screen.getByRole('button', { type: 'submit' });

  await waitFor(() => fireEvent.click(submitButton));

  expect(screen.getByPlaceholderText('Shorten a link here...').value).toBe('');
});
```

### Continued development

As I continue working on personal projects I plan to improve my React testing skills by using test driven development methods.

### Useful resources

- [ARIA](https://www.digitala11y.com/wai-aria-1-1-cheat-sheet/) - A cheatsheet that helped me get elements by ARIA role; the most preferred method of getting DOM elements.

- [testing-library](https://testing-library.com/docs/dom-testing-library/cheatsheet) - A good resource to find what testing-library query to use when.

## Author

- Website - [Chris](https://www.iamchriscarr.com)

- Frontend Mentor - [@christocarr](https://www.frontendmentor.io/profile/christocarr)
