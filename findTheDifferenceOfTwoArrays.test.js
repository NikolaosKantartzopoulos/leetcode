const findTheDifferenceOfTwoArrays = require("./findTheDifferenceOfTwoArrays");

test("1", () => {
  expect(findTheDifferenceOfTwoArrays([1, 2, 3], [2, 4, 6])).toEqual([
    [1, 3],
    [4, 6],
  ]);
});
test("1", () => {
  expect(findTheDifferenceOfTwoArrays([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([
    [3],
    [],
  ]);
});
