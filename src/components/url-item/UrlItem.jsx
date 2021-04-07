import React from 'react';

function UrlItem({ index, linkAndUrl, copiedShortenedLink, handleCopy }) {
  const { url, shortenedLink } = linkAndUrl;
  return (
    <li key={index}>
      <div>{url}</div>
      <div>
        <p>{shortenedLink}</p>
        {shortenedLink === copiedShortenedLink ? (
          <button style={{ backgroundColor: 'hsl(257, 27%, 26%)' }}>
            Copied!
          </button>
        ) : (
          <button onClick={handleCopy}>Copy</button>
        )}
      </div>
    </li>
  );
}

export default UrlItem;
