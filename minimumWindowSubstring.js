//todo

var minimumWindowSubstring = function (s, t) {
  if (t.length > s.length) return "";

  let map = new Map();
  let solutions = [];

  let l = 0;
  let r = 0;

  for (let letter of t) {
    map.set(letter, map.get(letter) + 1 || 1);
  }

  let target = [...map.keys()].length;

  while (r < s.length) {
    r++;
  }
};

minimumWindowSubstring("ADOBECODEBANC", "ABC");

module.exports = minimumWindowSubstring;
