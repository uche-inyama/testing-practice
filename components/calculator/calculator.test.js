const calculator = require('./calculator');

it('finds the sum', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

it('finds the difference', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

it('finds the quotient', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

it('finds the product', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
