const caeserCipher = require('./caeserCipher');

it('encrypts a word', () => {
  expect(caeserCipher(2).encryption('microverse')).toBe('oketqxgtug');
});

it('decrypts a word', () => {
  expect(caeserCipher(2).decryption('oketqxgtug')).toBe('microverse');
});
