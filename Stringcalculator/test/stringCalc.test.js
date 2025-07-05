const { Add } = require('../src/stringCalc.js');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});

test('returns number for single value', () => {
  expect(Add("1")).toBe(1);
});

