const sum = require('./sum');

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual === expected) {
      console.log('正確！');
    } else {
      console.log('錯誤！');
    }
  },
  toBeNaN: () => {
    if (isNaN(actual)) {
      console.log('正確！');
    } else {
      console.log('錯誤！');
    }
  },
});

expect(sum(1, 3)).toBe(4); // 正確！
expect(sum(1, 3)).toBe(5); // 錯誤！
expect(NaN).toBeNaN();     // 正確！

const expect = (actual, expected) => {
  if (actual === expected) {
    console.log('正確！');
  } else {
    console.log('錯誤！');
  }
}
expect(sum(1, 2), 3);

const value = sum(1, 3);
if (value === 4) {
  console.log('正確！');
} else {
  console.log('錯誤！');
}