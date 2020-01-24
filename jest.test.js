const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const analyze = require("./analyze");
const caeserCipher = require("./caeserCipher");

it("capitalizes the first character in a word", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

it("reverses any string", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

it("finds the sum", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

it("finds the difference", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

it("finds the quotient", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

it("finds the product", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

it("average", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

it("min", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

it("max", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

it("length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

it("encrypts a word", () => {
  expect(caeserCipher(2).encryption("microverse")).toBe("oketqxgtug");
});

it("decrypts a word", () => {
  expect(caeserCipher(2).decryption("oketqxgtug")).toBe("microverse");
});
