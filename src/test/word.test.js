import Word from '../Word';

describe('Word', () => {
  test('should create a letterMap', () => {
    const word = new Word('creationism');

    expect(word.letterMap).toEqual(
      new Map([
        ['c', 1],
        ['r', 1],
        ['e', 1],
        ['a', 1],
        ['t', 1],
        ['i', 2],
        ['o', 1],
        ['n', 1],
        ['s', 1],
        ['m', 1]
      ])
    );
  });

  test('should be able to tell if it can be made from a set of letters', () => {
    const word = new Word('word');
    const candidate = new Word('worldly'); // Contains word

    expect(word.canBeMadeFrom(candidate.letterMap)).toBe(true);
  });

  test('should be able to tell if it can be made from another word', () => {
    const word = new Word('iffy');
    const candidate = new Word('difficulty');

    expect(word.canBeMadeFrom(candidate)).toBe(true);
  });

  test('should be able to tell if it it an anagram of another word', () => {
    const word = new Word('orchestra');
    const other = new Word('carthorse');
    const third = new Word('orchestral');

    expect(word.isAnagramOf(other)).toBe(true);
    expect(other.isAnagramOf(word)).toBe(true);

    expect(word.isAnagramOf(third)).toBe(false); // Not anagrams...
    expect(third.isAnagramOf(word)).toBe(false);
    expect(other.isAnagramOf(third)).toBe(false);
    expect(third.isAnagramOf(other)).toBe(false);

    expect(word.canBeMadeFrom(third)).toBe(true); // ...but can be made
    expect(other.canBeMadeFrom(third)).toBe(true);
  });
});
