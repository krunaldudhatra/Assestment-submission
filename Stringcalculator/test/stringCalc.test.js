const { Add } = require('../src/stringCalc.js');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});
