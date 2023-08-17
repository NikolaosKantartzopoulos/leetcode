const validPalindrome2 = require("./validPalindrome2");

test("1", () => {
  expect(validPalindrome2("aba")).toBe(true);
});

test("1", () => {
  expect(validPalindrome2("abca")).toBe(true);
});

test("1", () => {
  expect(validPalindrome2("abc")).toBe(false);
});

test("1", () => {
  expect(validPalindrome2("ebcbbececabbacecbbcbe")).toBe(true);
});
