import React from 'react';

const WordBox = ({ words }) => (
  <div className="word-box">{words.map(word => <span key="word">{word}</span>)}</div>
);

class WordView extends React.Component {
  renderBoxes = words => {
    let currentLength = 0; // There won't be any!
    const wordCount = words.length;
    let currentWords = [];
    let boxes = [];

    for (let i = 0; i < wordCount; ++i) {
      if (words[i].length !== currentLength) {
        if (currentWords.length !== 0) {
          boxes.push(<WordBox key={currentLength} words={currentWords} />);
        }

        currentWords = [];
        currentLength = words[i].length;
      }

      currentWords.push(words[i]);
    }

    return boxes.concat(<WordBox key={currentLength} words={currentWords} />);
  };

  render() {
    const { words, loading } = this.props;

    if (words.length === 0 && !loading) return null;

    if (loading) {
      return <h2 className="wordview-title">Loading...</h2>;
    }

    return this.renderBoxes(words);
  }
}

export default WordView;
