import Word from '../Word';
import WordList from '../WordList';

let list;

describe('WordList', () => {
  beforeAll(() => {
    list = new WordList('test/test.words');
  });

  test('should be creatable', () => {
    const list1 = new WordList('test/test.words');
    expect(list1.words.length).toBe(26);
  });

  test('should be able to return words that can be built from a string', () => {
    expect(list.canBeMadeFrom('merlots')).toEqual(['merlot']);
  });

  test('should be able to return words that can be built from a Letter Map', () => {
    const lacquered = new Word('lacquered').letterMap;
    expect(list.canBeMadeFrom(lacquered)).toEqual(['lacquer']);
  });

  test('should be able to return words that can be built from a Word', () => {
    const kerbstones = new Word('kerbstones');
    expect(list.canBeMadeFrom(kerbstones)).toEqual(['kerbstone']);
  });

  test('should return no words when none can be made', () => {
    const unstable = new Word('unstable');
    expect(list.canBeMadeFrom(unstable)).toEqual([]);
  });

  test('should return words in descending length, then alpha order', () => {
    const nonsense = new Word('daggahecticspenqull');
    expect(list.canBeMadeFrom(nonsense)).toEqual([
      'sapience',
      'hectic',
      'dagga',
      'naiad', 
      'quill'
    ]);
  });
});
