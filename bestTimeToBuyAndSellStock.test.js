const bestTimeToBuyAndSellStock = require("./bestTimeToBuyAndSellStock");

test("1", () => {
  expect(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test("1", () => {
  expect(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toEqual(0);
});
