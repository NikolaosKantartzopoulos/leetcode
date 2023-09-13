const longestRepeatingCharacterReplacement = require("./longestRepeatingCharacterReplacement");

test("1", () => {
  expect(longestRepeatingCharacterReplacement("ABAB", 2)).toEqual(4);
});
test("1", () => {
  expect(longestRepeatingCharacterReplacement("AABABBA", 1)).toEqual(4);
});
