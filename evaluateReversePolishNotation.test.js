const evaluateReversePolishNotation = require("./evaluateReversePolishNotation");

test("1", () => {
  expect(evaluateReversePolishNotation(["2", "1", "+", "3", "*"])).toBe(9);
});

test("1", () => {
  expect(evaluateReversePolishNotation(["4", "13", "5", "/", "+"])).toBe(6);
});

test("1", () => {
  expect(
    evaluateReversePolishNotation([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ])
  ).toBe(22);
});
