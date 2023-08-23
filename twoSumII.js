var twoSumII = function (numbers, target) {
  let lp = 0;
  let rp = numbers.length - 1;

  while (lp < rp) {
    if (numbers[lp] + numbers[rp] === target) return [lp + 1, rp + 1];
    else if (numbers[rp] + numbers[lp] < target) lp++;
    else rp--;
  }
  return [-1, -1];
};

module.exports = twoSumII;
