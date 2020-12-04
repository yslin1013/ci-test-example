function sum (x = 0, y = 0) {
  return (isNaN(x) ? 0 : x) + (isNaN(y) ? 0 : y);
}

function square (x = 0) {
  let intX = isNaN(x) ? 0 : x;
  return intX * intX;
}

module.exports = {sum, square};