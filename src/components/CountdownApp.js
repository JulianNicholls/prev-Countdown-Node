import React from 'react';

import Header from './Header';
import LetterForm from './LetterForm';

class CountdownApp extends React.Component {
  render() {
    return [<Header key="h" />, <LetterForm key="f" />];
  }
}

export default CountdownApp;
