import React from 'react';
import axios from 'axios';

import Header from './Header';
import LetterForm from './LetterForm';
import WordView from './WordView';

class CountdownApp extends React.Component {
  state = {
    words: [],
    loading: false
  };

  getWords = async letters => {
    this.setState(() => ({ loading: false }));

    const response = await axios.post('/api/words', { letters });
    const words = await response.json();

    this.setState(() => ({ loading: false, words }));
  };

  render() {
    return [
      <Header key="h" />,
      <LetterForm key="f" getWords={this.getWords} />,
      <WordView key="v" {...this.state} />
    ];
  }
}

export default CountdownApp;
