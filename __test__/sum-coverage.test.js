const sum = require('../functions/sum-coverage');

test('test sum', () => {
  expect(sum(2)).toBe(2);
  expect(sum(2, 3)).toBe(5);
});