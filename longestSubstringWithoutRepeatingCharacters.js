var longestSubstringWithoutRepeatingCharacters = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let l = 0;
  let r = 0;
  let set = new Set();
  let max = 0;

  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    r++;
    max = Math.max(max, r - l);
  }

  return max;
};

module.exports = longestSubstringWithoutRepeatingCharacters;
