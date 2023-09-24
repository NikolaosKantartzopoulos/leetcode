const searchInsertPosition = require("./searchInsertPosition");

test("1", () => {
  expect(searchInsertPosition([1, 3, 5, 6], 5)).toEqual(2);
});

test("1", () => {
  expect(searchInsertPosition([1, 3, 5, 6], 2)).toEqual(1);
});

test("1", () => {
  expect(searchInsertPosition([1, 3, 5, 6], 7)).toEqual(4);
});
