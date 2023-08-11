var groupAnagrams = function (strs) {
  if (strs == []) return [];

  let hashMap = new Map();

  function sortWordLetters(str) {
    return str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }

  for (let word of strs) {
    let sortedWord = sortWordLetters(word);
    if (hashMap.has(sortedWord)) {
      hashMap.set(sortedWord, [...hashMap.get(sortedWord), word]);
    } else {
      hashMap.set(sortedWord, [word]);
    }
  }

  return [...hashMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
