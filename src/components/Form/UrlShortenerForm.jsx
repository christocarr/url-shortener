import React, { useState } from 'react';
import styles from './UrlShortenerForm.module.css';

function UrlShortenerForm({ shortLinkAndUrl, setShortLinkAndUrl }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);

  const errorStyle = {
    border: '3px solid  hsl(0, 87%, 67%)',
  };

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (url) {
      try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        setShortLinkAndUrl([
          ...shortLinkAndUrl,
          { url, shortenedLink: `https://${data.result.short_link}` },
        ]);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    if (url === '') {
      setError(true);
    }

    setUrl('');
  }

  function handleChange(ev) {
    setUrl(ev.target.value);
    setError(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      style={{
        backgroundImage: `url('./assets/images/bg-shorten-mobile.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: '75%',
      }}
    >
      <input
        data-testid="url-input"
        placeholder="Shorten a link here..."
        value={url}
        onChange={handleChange}
        className={styles.input}
        style={error ? errorStyle : null}
      />
      {error && <p className={styles.error}>Please add a link</p>}
      <button
        data-testid="shorten-url-button"
        type="submit"
        className={styles.button}
      >
        Shorten It!
      </button>
    </form>
  );
}

export default UrlShortenerForm;
