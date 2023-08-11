const maxNumberOfBalloons = require("./maxNumberOfBalloons");

test("1", () => {
  expect(maxNumberOfBalloons("nlaebolko")).toBe(1);
});
test("1", () => {
  expect(maxNumberOfBalloons("loonbalxballpoon")).toBe(2);
});
test("1", () => {
  expect(maxNumberOfBalloons("leetcode")).toBe(0);
});
test("1", () => {
  expect(maxNumberOfBalloons("lloo")).toBe(0);
});
