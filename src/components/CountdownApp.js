import React, { useState } from 'react';

import Header from './Header';
import LetterForm from './LetterForm';
import WordView from './WordView';

const CountdownApp = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <LetterForm />
      <WordView />
    </>
  );
};

export default CountdownApp;
