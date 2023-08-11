const canPlaceFlowers = require("./canPlaceFlowers");

test("1", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});
test("1", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
