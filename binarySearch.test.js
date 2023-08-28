const binarySearch = require("./binarySearch");

test("1", () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
});

test("1", () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
});
