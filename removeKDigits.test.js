const removeKDigits = require("./removeKDigits");

test("1", () => {
  expect(removeKDigits("1432219", 3)).toEqual("1219");
});

test("1", () => {
  expect(removeKDigits("10200", 1)).toEqual("200");
});

test("1", () => {
  expect(removeKDigits("10", 2)).toEqual("0");
});
