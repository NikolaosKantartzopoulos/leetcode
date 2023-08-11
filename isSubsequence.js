var isSubsequence = function (s, t) {
  if (s == "") return true;
  if (s.length > t.length) return false;
  let sp = 0;
  let tp = 0;
  while (sp < s.length) {
    if (t[tp] != s[sp]) tp++;
    else if (t[tp] == s[sp]) {
      sp++;
      tp++;
    }
    if (sp == s.length) return true;
    if (tp == t.length) return false;
  }
};

module.exports = isSubsequence;
