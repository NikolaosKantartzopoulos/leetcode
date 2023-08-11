const isSubsequence = require("./isSubsequence");

test("1", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test("2", () => {
  expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});
