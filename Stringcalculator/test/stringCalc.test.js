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
