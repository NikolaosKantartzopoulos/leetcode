const threeSum = require("./threeSum");

test("1", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test("1", () => {
  expect(threeSum([0, 1, 1])).toEqual([]);
});

test("1", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
