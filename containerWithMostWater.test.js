const containerWithMostWater = require("./containerWithMostWater");

test("1", () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});

test("1", () => {
  expect(containerWithMostWater([1, 1])).toEqual(1);
});
