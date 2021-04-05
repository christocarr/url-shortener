import React, { useState } from 'react';
import UrlShortenerForm from './components/Form/UrlShortenerForm';
function App() {
  const [shortendLink, setShortendLink] = useState('');

  return (
    <div>
      <UrlShortenerForm setLink={setShortendLink} />
      <p>{shortendLink}</p>
    </div>
  );
}

export default App;
