const analyze = require('./analyze');

it('average', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

it('min', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it('max', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it('length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
