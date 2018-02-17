import React from 'react';

class WordView extends React.Component {
  render() {
    const { words, loading } = this.props;

    if (words.length === 0 && !loading) return null;

    if (loading) {
      return <h2 className="wordview-title">Loading...</h2>;
    }
  }
}

export default WordView;
