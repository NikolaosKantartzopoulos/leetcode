var wordPattern = function (pattern, s) {
  let hash = new Map();

  let arr = s.split(" ");

  if (arr.length != pattern.length) return false;

  for (let idx in pattern) {
    if (!hash.has(pattern[idx])) {
      if ([...hash.values()].includes(arr[idx])) return false;
      hash.set(pattern[idx], arr[idx]);
    } else if (hash.get(pattern[idx]) != arr[idx]) return false;
  }

  return true;
};

module.exports = wordPattern;
