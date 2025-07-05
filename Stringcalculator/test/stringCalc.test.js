const { Add } = require('../src/stringCalc.js');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});

test('returns number for single value', () => {
  expect(Add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
  expect(Add("1,2")).toBe(3);
});

test('returns sum of multiple comma-separated numbers', () => {
  expect(Add("1,2,3,4")).toBe(10);
});

test('supports newline as delimiter', () => {
  expect(Add("1\n2,3")).toBe(6);
});

test('supports custom delimiter syntax', () => {
  expect(Add("//;\n1;2")).toBe(3);
});

test('throws on negative numbers', () => {
  expect(() => Add("1,-2,-4")).toThrow("negatives not allowed: -2, -4");
});

test('ignores numbers greater than 1000', () => {
  expect(Add("2,1001")).toBe(2);
});

test('supports multi-length delimiters like [***]', () => {
  expect(Add("//[***]\n1***2***3")).toBe(6);
});

test('supports multiple custom delimiters', () => {
  expect(Add("//[*][%]\n1*2%3")).toBe(6);
});

test('supports multiple multi-length delimiters', () => {
  expect(Add("//[**][%%]\n1**2%%3")).toBe(6);
});
