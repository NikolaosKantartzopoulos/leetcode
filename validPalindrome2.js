var validPalindrome2 = function (s) {
  let lp = 0;
  let rp = s.length - 1;

  while (lp - rp < 0) {
    if (s[lp] != s[rp]) {
      let woLeftLetter = s.slice(lp + 1, rp + 1);
      let woRightLetter = s.slice(lp, rp);
      return (
        woLeftLetter === woLeftLetter.split("").reverse().join("") ||
        woRightLetter === woRightLetter.split("").reverse().join("")
      );
    } else if (s[lp] === s[rp]) {
      lp++;
      rp--;
    }
  }
  return true;
};

module.exports = validPalindrome2;
