const nextGreaterElementI = require("./nextGreaterElementI");

test("1", () => {
  expect(nextGreaterElementI([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
});

test("1", () => {
  expect(nextGreaterElementI([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
});
