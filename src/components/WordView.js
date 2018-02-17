import React from 'react';

class WordView extends React.Component {
  render() {
    const { words } = this.props;

    if (words.length === 0) return null;
  }
}

export default WordView;
