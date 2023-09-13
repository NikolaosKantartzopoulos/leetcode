// TODO

var longestRepeatingCharacterReplacement = function (s, k) {
  let cnt = 0;
  let map = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1;
    map.set(s[r], 1 + (map.get(s[r]) || 0));

    if (len - Math.max(...map.values()) > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    len = r - l + 1;
    cnt = Math.max(cnt, len);
  }

  return cnt;
};

longestRepeatingCharacterReplacement("AABABBA", 1);

module.exports = longestRepeatingCharacterReplacement;
