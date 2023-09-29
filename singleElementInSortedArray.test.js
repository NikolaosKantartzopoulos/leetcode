const singleElementInSortedArray = require("./singleElementInSortedArray");

test("1", () => {
  expect(singleElementInSortedArray([1, 1, 2, 3, 3, 4, 4, 8, 8])).toEqual(
    2
  );
});

test("1", () => {
  expect(singleElementInSortedArray([3, 3, 7, 7, 10, 11, 11])).toEqual(10);
});
