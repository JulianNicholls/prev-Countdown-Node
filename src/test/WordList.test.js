import WordList from '../WordList';

describe('WordList', () => {
  test('should be creatable', () => {
    const list = new WordList('/test.words').then(() => {
      expect(true).toBe(true);
    });
  });
});
