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
    <>
      <section className="hero_container">
        <div
          className="svg_container"
          style={{
            backgroundImage: `url('./assets/images/illustration-working.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'calc(100% + 110px)',
            backgroundSize: '100%',
          }}
        ></div>
        <div className="hero_text_container">
          <h1 className="hero_heading">More than just shorter links</h1>
          <p className="hero_body">
            Build your brand's recognition and get insights on how your links
            are performing.
          </p>
          <button className="hero_cta">Get Started</button>
        </div>
      </section>
      <div className="form_link_list_container">
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
    </>
  );
}

export default App;
