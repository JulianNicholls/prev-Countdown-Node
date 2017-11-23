// Class for storing words, both the text and the letters.
// The word is stored in lower-case

class Word {
  constructor(word) {
    this.word = word.toLowerCase();

    this._deconstruct();
  }

  canBeMadeFrom = candidateset => {
    if (candidateset instanceof Word) candidateset = candidateset.letterset;

    Object.keys(this.letterset).forEach(char => {
      if (!candidateset[char] || candidateset[char] < this.letterset[char])
        return false;
    });

    return true;
  };

  isAnagramOf = other => {
    const keys = Object.keys(this.letterset);

    other = other.letterset;

    if (keys.length !== Object.keys(other).length) return false;

    keys.forEach(char => {
      const othervalue = other[char];

      if (!othervalue || othervalue !== this.letterset[char]) return false;
    });

    return true;
  };

  _deconstruct = () => {
    this.letterset = {};

    this.word.split('').forEach(char => {
      const count = this.letterset[char];

      this.letterset[char] = count ? count + 1 : 1;
    });
  };
}

export default Word;
