const sortColors = require("./sortColors");

test("1", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});

test("1", () => {
  expect(sortColors([2, 1, 0])).toEqual([0, 1, 2]);
});
