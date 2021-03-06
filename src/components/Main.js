import React, { useState } from 'react';

import Header from './Header';
import Tabs from './Tabs';
import LetterForm from './LetterForm';
import WordView from './WordView';

const Main = () => {
  const [panel, setPanel] = useState('letters');

  return (
    <div>
      <Header />
      <Tabs setPanel={setPanel} />
      {panel === 'letters' ? (
        <>
          <LetterForm />
          <WordView />
        </>
      ) : (
        <h1>Numbers!</h1>
      )}
    </div>
  );
};

export default Main;
