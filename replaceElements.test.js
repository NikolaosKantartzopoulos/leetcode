const replaceElements = require("./replaceElements");

test("1", () => {
  expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([
    18, 6, 6, 6, 1, -1,
  ]);
});
