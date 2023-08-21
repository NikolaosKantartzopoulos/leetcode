const baseballGame = require("./baseballGame");

test("1", () => {
  expect(baseballGame(["5", "2", "C", "D", "+"])).toBe(30);
});

test("1", () => {
  expect(baseballGame(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
});

test("1", () => {
  expect(baseballGame(["1", "C"])).toBe(0);
});
