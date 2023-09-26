let guess = () => {};

var guessNumberHigherOrLower = function (n) {
  let l = 1;
  let r = n;

  while (true) {
    let middle = Math.floor((r + l) / 2);
    let num = guess(middle);

    if (num === 0) {
      return middle;
    } else if (num > 0) {
      l = middle + 1;
    } else if (num < 0) {
      r = middle - 1;
    }
  }
};

module.exports = guessNumberHigherOrLower;
