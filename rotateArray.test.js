const rotateArray = require("./rotateArray");

test("1", () => {
  expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
    5, 6, 7, 1, 2, 3, 4,
  ]);
});

test("1", () => {
  expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
});
