const sum = require('../functions/sum');

test('用 1 與 3 執行 sum 會回傳 9', () => {
  // Arrange：準備好期望的結果值
  const expected = 4; 
  // Act：用 1 和 3 執行 sum
  const actual = sum(1, 3);
  // Assert：斷言階段
  expect(actual).toBe(expected);
});
