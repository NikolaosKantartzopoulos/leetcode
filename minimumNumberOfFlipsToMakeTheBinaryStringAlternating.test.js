const minimumNumberOfFlipsToMakeTheBinaryStringAlternating = require("./minimumNumberOfFlipsToMakeTheBinaryStringAlternating");

test("1", () => {
  expect(
    minimumNumberOfFlipsToMakeTheBinaryStringAlternating("111000")
  ).toEqual(2);
});

test("1", () => {
  expect(
    minimumNumberOfFlipsToMakeTheBinaryStringAlternating("010")
  ).toEqual(0);
});

test("1", () => {
  expect(
    minimumNumberOfFlipsToMakeTheBinaryStringAlternating("1110")
  ).toEqual(1);
});
