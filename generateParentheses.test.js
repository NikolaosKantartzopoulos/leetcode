const generateParentheses = require("./generateParentheses");

test("1", () => {
  expect(generateParentheses(3)).toEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});

test("1", () => {
  expect(generateParentheses(1)).toEqual(["()"]);
});
