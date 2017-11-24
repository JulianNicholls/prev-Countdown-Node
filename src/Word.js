// Class for storing words, both the text and the letters.
// The word is stored in lower-case

class Word {
  constructor(word) {
    this.word = word.toLowerCase();

    this._deconstruct();
  }

  canBeMadeFrom = other => {
    if (other instanceof Word) other = other.letterMap;

    this.letterMap.forEach((value, key) => {
      if (!other.has(key) || other.get(key) < value) return false;
    });

    return true;
  };

  isAnagramOf = other => {
    other = other.letterMap;

    if (this.letterMap.size !== other.size) return false;

    this.letterMap.forEach((value, key) => {
      const othervalue = other.get(key);

      if (!othervalue || othervalue !== value) return false;
    });

    return true;
  };

  _deconstruct = () => {
    this.letterMap = new Map();

    this.word.split('').forEach(char => {
      const count = this.letterMap.get(char);

      this.letterMap.set(char, count ? count + 1 : 1);
    });
  };
}

export default Word;
