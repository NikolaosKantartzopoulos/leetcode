const validPalindrome = require("./validPalindrome");

test("1", () => {
  expect(validPalindrome("amanaplanacanalpanama")).toBe(true);
});

test("1", () => {
  expect(validPalindrome("race a car")).toBe(false);
});

test("1", () => {
  expect(validPalindrome(" ")).toBe(true);
});

test("1", () => {
  expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});
