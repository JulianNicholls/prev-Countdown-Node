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
    this.setState(() => ({ loading: true }));

    const response = await axios.post('/api/words', { letters });
    console.log(response);

    this.setState(() => ({ loading: false, words: response.data.words }));
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
