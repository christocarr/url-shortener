import React, { useState } from 'react';

function UrlShortenerForm({ shortLinkAndUrl, setShortLinkAndUrl }) {
  const [url, setUrl] = useState('');

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
      }
    }

    setUrl('');
  }

  function handleChange(ev) {
    setUrl(ev.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="url-input"
        placeholder="Shorten a link here..."
        value={url}
        onChange={handleChange}
      />
      <button data-testid="shorten-url-button" type="submit">
        Shorten It!
      </button>
    </form>
  );
}

export default UrlShortenerForm;
