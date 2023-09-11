const longestSubstringWithoutRepeatingCharacters = require("./longestSubstringWithoutRepeatingCharacters");

test("1", () => {
  expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toEqual(3);
});
test("1", () => {
  expect(longestSubstringWithoutRepeatingCharacters("bbbbb")).toEqual(1);
});
test("1", () => {
  expect(longestSubstringWithoutRepeatingCharacters("pwwkew")).toEqual(3);
});
