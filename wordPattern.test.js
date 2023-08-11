const wordPattern = require("./wordPattern");

test("1", () => {
  expect(wordPattern("abba", "dog cat cat dog")).toBe(true);
});
test("1", () => {
  expect(wordPattern("abba", "dog cat cat fish")).toBe(false);
});
test("1", () => {
  expect(wordPattern("aaaa", "dog cat cat dog")).toBe(false);
});
test("1", () => {
  expect(wordPattern("abba", "dog dog dog dog")).toBe(false);
});
