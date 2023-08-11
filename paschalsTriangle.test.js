const paschalsTriangle = require("./paschalsTriangle");

test("1", () => {
  expect(paschalsTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});

test("2", () => {
  expect(paschalsTriangle(1)).toEqual([[1]]);
});
