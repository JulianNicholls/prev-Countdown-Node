import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LetterForm = ({ getWords }) => {
  const [letters, setLetters] = useState('');

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
          imputmode="search"
          id="letters"
          value={letters}
          onChange={event => setLetters(event.target.value)}
          autoComplete="off"
          autoCorrect="off"
          autoFocus
        />
        <button
          type="submit"
          className="big-button"
          disabled={letters.length < 7}
        >
          Countdown
        </button>
      </form>
    </div>
  );
};

LetterForm.propTypes = {
  getWords: PropTypes.func.isRequired,
};

export default LetterForm;
