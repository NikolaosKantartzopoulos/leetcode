const mergeStringsAlternately = require("./mergeStringsAlternately");

test("1", () => {
  expect(mergeStringsAlternately("abc", "pqr")).toEqual("apbqcr");
});
test("1", () => {
  expect(mergeStringsAlternately("ab", "pqrs")).toEqual("apbqrs");
});
