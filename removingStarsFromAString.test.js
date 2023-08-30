const removingStarsFromAString = require("./removingStarsFromAString");

test("1", () => {
  expect(removingStarsFromAString("leet**cod*e")).toEqual("lecoe");
});

test("1", () => {
  expect(removingStarsFromAString("erase*****")).toEqual("");
});
