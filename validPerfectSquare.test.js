const validPerfectSquare = require("./validPerfectSquare");

test("1", () => {
  expect(validPerfectSquare(16)).toEqual(true);
});
test("1", () => {
  expect(validPerfectSquare(14)).toEqual(false);
});
