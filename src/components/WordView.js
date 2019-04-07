import React from 'react';
import PropTypes from 'prop-types';

import WordBox from './WordBox';

const WordView = ({ words, loading }) => {
  const boxes = () => {
    let currentLength = 0;
    let currentWords = [];
    let boxes = [];

    words.forEach(word => {
      if (word.length !== currentLength) {
        if (currentWords.length !== 0) {
          boxes.push(<WordBox key={currentLength} words={currentWords} />);
        }

        currentWords = [];
        currentLength = word.length;
      }

      currentWords.push(word);
    });

    return boxes.concat(<WordBox key={currentLength} words={currentWords} />);
  };

  if (words.length === 0 && !loading) return null;

  if (loading) {
    return <h2 className="wordview-title">Loading...</h2>;
  }

  return <div className="wordview">{boxes(words)}</div>;
};

WordView.propTypes = {
  words: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default WordView;
