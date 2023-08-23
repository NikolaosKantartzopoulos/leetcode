const removeDuplicatesFromSortedArrayII = require("./removeDuplicatesFromSortedArrayII");

test("1", () => {
  expect(removeDuplicatesFromSortedArrayII([1, 1, 1, 2, 2, 3])).toEqual(5);
});
test("1", () => {
  expect(
    removeDuplicatesFromSortedArrayII([0, 0, 1, 1, 1, 1, 2, 3, 3])
  ).toEqual(7);
});
test("1", () => {
  expect(removeDuplicatesFromSortedArrayII([1, 1, 1])).toEqual(2);
});
