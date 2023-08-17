const sortNums = require("./mergeSort");

test("1", () => {
  expect(sortNums([1, 5, 6, 4, 3, 2, 0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
});
