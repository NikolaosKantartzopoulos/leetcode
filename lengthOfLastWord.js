var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let cnt = 0;
  let lettersRead = false;

  while (true) {
    if (cnt > 0 && lettersRead && (s[index] == " " || null)) return cnt;
    if (s[index] !== " ") cnt++;
    index--;
  }
};
