const findPivotIndex = require("./findPivotIndex");

test("1", () => {
  expect(findPivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
});

test("1", () => {
  expect(findPivotIndex([1, 2, 3])).toEqual(-1);
});

test("1", () => {
  expect(findPivotIndex([2, 1, -1])).toEqual(0);
});
