import React from 'react';
import axios from 'axios';

import Header from './Header';
import LetterForm from './LetterForm';
import WordView from './WordView';

class CountdownApp extends React.Component {
  state = {
    words: []
  };

  getWords = async letters => {
    const response = await axios.post('/api/words', { letters });
    const words = await response.json();

    this.setState(() => ({ words }));
  };

  render() {
    return [
      <Header key="h" />,
      <LetterForm key="f" getWords={this.getWords} />,
      <WordView key="v" words={this.state.words} />
    ];
  }
}

export default CountdownApp;
