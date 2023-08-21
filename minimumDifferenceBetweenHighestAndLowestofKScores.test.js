const minimumDifferenceBetweenHighestAndLowestofKScores = require("./minimumDifferenceBetweenHighestAndLowestofKScores");

test("1", () => {
  expect(
    minimumDifferenceBetweenHighestAndLowestofKScores([90], 1)
  ).toEqual(0);
});
test("1", () => {
  expect(
    minimumDifferenceBetweenHighestAndLowestofKScores([9, 4, 1, 7], 2)
  ).toEqual(2);
});
