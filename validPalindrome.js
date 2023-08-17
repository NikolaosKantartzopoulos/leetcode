var validPalindrome = function (s) {
  s = s.split(" ").join("").toLowerCase();
  let lp = 0;
  let rp = s.length - 1;
  while (lp - rp <= 0) {
    if (!/[a-z0-9]/.test(s[lp])) {
      lp++;
    } else if (!/[a-z0-9]/.test(s[rp])) {
      rp--;
    } else if (s[lp] != s[rp]) {
      return false;
    } else if (s[lp] === s[rp]) {
      lp++;
      rp--;
    }
  }

  return true;
};

module.exports = validPalindrome;
