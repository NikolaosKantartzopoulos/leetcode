var isIsomorphic = function (s, t) {
  let miniMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!miniMap.has(s[i])) {
      if ([...miniMap.values()].includes(t[i])) return false;
      miniMap.set(s[i], t[i]);
    } else {
      if (!(miniMap.get(s[i]) == t[i])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = isIsomorphic;
