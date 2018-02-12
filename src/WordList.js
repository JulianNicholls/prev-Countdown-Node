import axios from 'axios';

import Word from './Word';

// A word list that stores words and gives candidate answers

export default class WordList {
  constructor(filename) {
    console.log('WordList constructor');

    return this._loadWords(filename);
  }

  _loadWords = filename => {
    axios
      .get(filename)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
