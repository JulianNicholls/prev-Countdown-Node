// Class for storing words, both the text and the letters.
// The word is stored in lower-case

class Word {
  constructor(word) {
    this.word = word.toLowerCase();

    this.deconstruct();
  }

  deconstruct = () => {
    this.letterset = {};

    this.word.split('').forEach(char => {
      const count = this.letterset[char];

      this.letterset[char] = count ? count + 1 : 1;
    });
  };

  canBeMadeFrom = candidateset => {
    if (candidateset instanceof Word) candidateset = candidateset.letterset;
    console.log(candidateset);

    Object.keys(this.letterset).forEach(char => {
      console.log(candidateset[char], this.letterset[char]);

      if (!candidateset[char] || candidateset[char] < this.letterset[char])
        return false;
    });

    return true;
  };

  letters = () => {
    return this.word.split('');
  };
}

export default Word;
