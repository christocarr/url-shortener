import React from 'react';
import styles from './UrlItem.module.css';

function UrlItem({ index, linkAndUrl, copiedShortenedLink, handleCopy }) {
  const { url, shortenedLink } = linkAndUrl;
  return (
    <li key={index} className={styles.list_item}>
      <div className={styles.user_url_container}>
        <p>{url}</p>
      </div>
      <div className={styles.shortened__url_link_container}>
        <p className={styles.short_link}>{shortenedLink}</p>
        {shortenedLink === copiedShortenedLink ? (
          <button
            className={styles.copy_button}
            style={{ backgroundColor: 'hsl(257, 27%, 26%)' }}
          >
            Copied!
          </button>
        ) : (
          <button onClick={handleCopy} className={styles.copy_button}>
            Copy
          </button>
        )}
      </div>
    </li>
  );
}

export default UrlItem;
