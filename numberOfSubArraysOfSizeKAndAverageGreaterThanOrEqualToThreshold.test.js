const numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold = require("./numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold");

test("1", () => {
  expect(
    numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold(
      [2, 2, 2, 2, 5, 5, 5, 8],
      3,
      4
    )
  ).toEqual(3);
});

test("1", () => {
  expect(
    numberOfSubArraysOfSizeKAndAverageGreaterThanOrEqualToThreshold(
      [11, 13, 17, 23, 29, 31, 7, 5, 2, 3],
      3,
      5
    )
  ).toEqual(6);
});
