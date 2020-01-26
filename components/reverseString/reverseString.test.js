const reverseString = require('./reverseString');

it('reverses any string', () => {
  expect(reverseString('reverse')).toBe('esrever');
});
