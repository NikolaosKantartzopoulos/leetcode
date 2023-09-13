var permutationInString = function (s1, s2) {
  let l = 0;
  let map = new Map();

  for (let letter of s1) {
    map.set(letter, (map.get(letter) || 0) - 1);
  }

  for (let r = 0; r < s2.length; r++) {
    let len = r - l + 1;

    if (len > s1.length) {
      if (map.has(s2[l])) map.set(s2[l], map.get(s2[l]) - 1);
      l++;
    }

    if (map.has(s2[r])) {
      map.set(s2[r], (map.get(s2[r]) || 0) + 1);
    }

    if ([...map.values()].every((val) => val === 0)) return true;
  }

  return false;
};

module.exports = permutationInString;
