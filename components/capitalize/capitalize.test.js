const capitalize = require('./capitalize');

it('capitalizes the first character in a word', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});
