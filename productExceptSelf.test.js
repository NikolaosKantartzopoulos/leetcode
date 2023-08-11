const productExceptSelf = require("./productExceptSelf");

test("1st", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

// test("2nd", () => {
//   expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
// });
test("3", () => {
  expect(productExceptSelf([2, 3, 5, 0])).toEqual([0, 0, 0, 30]);
});
