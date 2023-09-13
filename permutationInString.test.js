const permutationInString = require("./permutationInString");

test("1", () => {
  expect(permutationInString("ab", "eidbaooo")).toEqual(true);
});

test("1", () => {
  expect(permutationInString("ab", "eidboaoo")).toEqual(false);
});

test("1", () => {
  expect(permutationInString("adc", "dcda")).toEqual(true);
});
