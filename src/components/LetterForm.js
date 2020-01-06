import React, { useState } from 'react';

import { useWords } from '../context';

const LetterForm = () => {
  const [letters, setLetters] = useState('');
  const { getWords } = useWords();

  const findWords = event => {
    event.preventDefault();

    getWords(letters);

    return false;
  };

  return (
    <div className="container">
      <form onSubmit={findWords}>
        <input
          type="search"
          inputMode="search"
          id="letters"
          value={letters}
          onChange={event => setLetters(event.target.value)}
          autoComplete="off"
          autoCorrect="off"
          autoFocus
        />
        <button type="submit" className="big-button" disabled={letters.length < 8}>
          Countdown
        </button>
      </form>
    </div>
  );
};

export default LetterForm;
