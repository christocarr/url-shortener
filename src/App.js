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
          <button className="button_cta">Get Started</button>
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
      <section className="statistics_section">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="statistics_container">
          <div
            className="icon_container"
            style={{
              backgroundImage: `url('./assets/images/icon-brand-recognition.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '50%',
            }}
          ></div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="statistics_container">
          <div
            className="icon_container"
            style={{
              backgroundImage: `url('./assets/images/icon-detailed-records.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '50%',
            }}
          ></div>
          <h3>Detaild Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="connection_line"></div>
        <div className="statistics_container">
          <div
            className="icon_container"
            style={{
              backgroundImage: `url('./assets/images/icon-fully-customizable.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '50%',
            }}
          ></div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.{' '}
          </p>
        </div>
      </section>
      <section
        className="boost_section"
        style={{
          backgroundImage: `url('./assets/images/bg-boost-mobile.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
        }}
      >
        <h2 style={{ color: 'white' }}>Boost your Links today</h2>
        <button className="button_cta">Get Started</button>
      </section>
    </>
  );
}

export default App;
