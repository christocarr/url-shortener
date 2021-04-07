import React, { useState } from 'react';
import UrlShortenerForm from './components/form/UrlShortenerForm';
import UrlItem from './components/url-item/UrlItem';

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
            <UrlItem
              index={index}
              linkAndUrl={linkAndUrl}
              copiedShortenedLink={copiedShortenedLink}
              handleCopy={handleCopy}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
