const twoSumII = require("./twoSumII");

test("1", () => {
  expect(twoSumII([2, 7, 11, 15], 9)).toEqual([1, 2]);
});
test("1", () => {
  expect(twoSumII([2, 3, 4], 6)).toEqual([1, 3]);
});
test("1", () => {
  expect(twoSumII([-1, 0], -1)).toEqual([1, 2]);
});
test("1", () => {
  expect(twoSumII([0, 0, 3, 4], 0)).toEqual([1, 2]);
});

test("1", () => {
  expect(twoSumII([-3, 3, 4, 90], 0)).toEqual([1, 2]);
});
