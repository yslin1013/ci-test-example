const func = require('../functions/math');

describe('Test sum', () => {
  test('Test default return zero', () => {
    expect(func.sum()).toBe(0);
  });

  test('Test 3 plus 5 is 8', () => {
    expect(func.sum(3, 5)).toBe(8);
  });

  test('Pass when value is NaN can return zero', () => {
    expect(func.sum(NaN, NaN)).not.toBeNaN();
  });
});

describe('Test square', () => {
  test('Pass 3 can return 9', () => {
    expect(func.square(3)).toBe(9);
  });

  test('Pass when value is String can return zero', () => {
    expect(func.square('efg')).toBe(0);
  });
});