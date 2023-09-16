const maximumNumberOfVowelsInASubstringOfGivenLength = require("./maximumNumberOfVowelsInASubstringOfGivenLength");

test("1", () => {
  expect(
    maximumNumberOfVowelsInASubstringOfGivenLength("abciiidef", 3)
  ).toEqual(3);
});

test("1", () => {
  expect(
    maximumNumberOfVowelsInASubstringOfGivenLength("aeiou", 2)
  ).toEqual(2);
});

test("1", () => {
  expect(
    maximumNumberOfVowelsInASubstringOfGivenLength("leetcode", 3)
  ).toEqual(2);
});

test("1", () => {
  expect(
    maximumNumberOfVowelsInASubstringOfGivenLength("weallloveyou", 7)
  ).toEqual(4);
});
