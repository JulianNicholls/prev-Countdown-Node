import React, { Fragment } from 'react';
import axios from 'axios';

import Header from './Header';
import LetterForm from './LetterForm';
import WordView from './WordView';

class CountdownApp extends React.Component {
  state = {
    words: [],
    loading: false,
  };

  getWords = async letters => {
    this.setState(() => ({ loading: true }));

    const response = await axios.post('/api/words', { letters });

    this.setState(() => ({ loading: false, words: response.data.words }));
  };

  render() {
    return (
      <Fragment>
        <Header />
        <LetterForm getWords={this.getWords} />
        <WordView {...this.state} />
      </Fragment>
    );
  }
}

export default CountdownApp;
