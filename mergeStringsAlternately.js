var mergeStringsAlternately = function (word1, word2) {
  let i = 0;
  let res = "";

  while (i < word1.length && i < word2.length) {
    res += word1[i] + word2[i];
    i++;
  }

  // if (i == word1.length) res += word2.slice(i);
  if (i == word1.length) res += word2.slice(i);
  if (i == word2.length) res += word1.slice(i);

  return res;
};

module.exports = mergeStringsAlternately;
