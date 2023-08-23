var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let rightPointer = s.length - i - 1;
    let temp = s[i];
    s[i] = s[rightPointer];
    s[rightPointer] = temp;
  }

  return s;
};
