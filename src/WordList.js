const fs = require('fs');
const path = require('path');

const Word = require('./Word');

// A word list that stores words and gives candidate answers

class WordList {
  constructor(filename) {
    this._loadWords(filename);
  }

  // Takes either a String, Word, or Letter Map
  canBeMadeFrom(other) {
    if (other instanceof Word) {
      other = other.letterMap;
    } else if (!(other instanceof Map)) {
      other = new Word(other).letterMap;
    }

    return this.words
      .filter(word => word.canBeMadeFrom(other))
      .map(word => word.text)
      .sort((a, b) => b.length - a.length);
  }

  _loadWords(filename) {
    const fnPath = path.join(__dirname, filename);
    const data = fs.readFileSync(fnPath, 'utf8');

    this.words = data.split(/\n/).map(line => new Word(line));
  }
}

module.exports = WordList;
