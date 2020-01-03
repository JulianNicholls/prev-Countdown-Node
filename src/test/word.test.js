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
        ['m', 1],
      ])
    );
  });

  test('should return the contained word as .text', () => {
    const word = new Word('worldly'); // Contains word

    expect(word.text).toEqual('worldly');
  });

  test('should be able to tell if it can be made from a string', () => {
    const word = new Word('word');
    const candidate = 'worldly'; // Contains word
    const third = 'blueprint';

    expect(word.canBeMadeFrom(candidate)).toBe(true);
    expect(word.canBeMadeFrom(third)).toBe(false);
  });

  test('should be able to tell if it can be made from a Letter Map', () => {
    const word = new Word('like');
    const candidate = new Word('likely'); // Contains word
    const third = new Word('unrelated');

    expect(word.canBeMadeFrom(candidate.letterMap)).toBe(true);
    expect(word.canBeMadeFrom(third.letterMap)).toBe(false);
  });

  test('should be able to tell if it can be made from another Word', () => {
    const word = new Word('iffy');
    const candidate = new Word('difficulty');
    const third = new Word('flitty');

    expect(word.canBeMadeFrom(candidate)).toBe(true);
    expect(word.canBeMadeFrom(third)).toBe(false);
  });

  test('should be able to tell if a Word is an anagram of another Word', () => {
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
    expect(third.canBeMadeFrom(word)).toBe(false);
  });

  test('should be able to tell if a String is an anagram of another Word', () => {
    const word = new Word('orchestra');
    const other = 'carthorse';
    const third = 'orchestral';

    expect(word.isAnagramOf(other)).toBe(true);
    expect(word.isAnagramOf(third)).toBe(false); // Not anagrams...
  });

  test('should be able to tell if a Letter Map is an anagram of another Word', () => {
    const word = new Word('orchestra');
    const other = new Word('carthorse').letterMap;
    const third = new Word('orchestral').letterMap;

    expect(word.isAnagramOf(other)).toBe(true);
    expect(word.isAnagramOf(third)).toBe(false); // Not anagrams...
  });
});
