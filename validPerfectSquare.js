var validPerfectSquare = function (num) {
  if (num <= 1) return true;

  let cnt = 2;

  while (cnt * cnt <= num) {
    if (cnt * cnt === num) return true;
    cnt++;
  }
  return false;
};

module.exports = validPerfectSquare;
