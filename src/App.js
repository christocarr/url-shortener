import React, { useState } from 'react';
import UrlShortenerForm from './components/form/UrlShortenerForm';

function App() {
  const [shortLinkAndUrl, setShortLinkAndUrl] = useState([]);
  const [copiedShortenedLink, setCopiedShortenedLink] = useState('');

  const handleCopy = (event) => {
    setCopiedShortenedLink(event.target.previousElementSibling.innerText);
  };

  return (
    <div>
      <UrlShortenerForm
        shortLinkAndUrl={shortLinkAndUrl}
        setShortLinkAndUrl={setShortLinkAndUrl}
      />
      {shortLinkAndUrl.length > 0 && (
        <ul>
          {shortLinkAndUrl.map((linkAndUrl, index) => (
            <li key={index}>
              <div>{linkAndUrl.url}</div>
              <div>
                <p>{linkAndUrl.shortenedLink}</p>
                {linkAndUrl.shortenedLink === copiedShortenedLink ? (
                  <button style={{ backgroundColor: 'hsl(257, 27%, 26%)' }}>
                    Copied!
                  </button>
                ) : (
                  <button onClick={handleCopy}>Copy</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
