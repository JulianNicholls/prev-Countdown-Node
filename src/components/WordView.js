import React from 'react';

const WIDE_CHANGEOVER = 21;

const WordBox = ({ words }) => {
  const count = words.length;

  return (
    <div className={count < WIDE_CHANGEOVER ? 'word-box' : 'word-box wide'}>
      <div className="header">
        {words[0].length}-letter words <span>({words.length})</span>
      </div>
      <p>
        {words.map((word, index) => (
          <a key={word} href={`http://dictionary.reference.com/browse/${word}`}>
            {word.toUpperCase()}
            {index !== count - 1 && ', '}
          </a>
        ))}
      </p>
    </div>
  );
};

class WordView extends React.Component {
  boxes(words) {
    let currentLength = 0;
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
  }

  render() {
    const { words, loading } = this.props;

    if (words.length === 0 && !loading) return null;

    if (loading) {
      return <h2 className="wordview-title">Loading...</h2>;
    }

    return <div className="wordview">{this.boxes(words)}</div>;
  }
}

export default WordView;
