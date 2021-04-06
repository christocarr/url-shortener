import React, { useState } from 'react';
import UrlShortenerForm from './components/form/UrlShortenerForm';

function App() {
  const [shortLinkAndUrl, setShortLinkAndUrl] = useState([]);
  console.log(shortLinkAndUrl);
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
                <p>{`https://${linkAndUrl.shortenedLink}`}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
