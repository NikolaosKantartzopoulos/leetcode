const fruitIntoBaskets = require("./fruitIntoBaskets");

test("1", () => {
  expect(fruitIntoBaskets([1, 2, 1])).toEqual(3);
});
test("1", () => {
  expect(fruitIntoBaskets([0, 1, 2, 2])).toEqual(3);
});
test("1", () => {
  expect(fruitIntoBaskets([1, 2, 3, 2, 2])).toEqual(4);
});
