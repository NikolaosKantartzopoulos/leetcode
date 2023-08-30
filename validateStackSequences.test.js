const validateStackSequences = require("./validateStackSequences");

test("1", () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toEqual(
    true
  );
});

test("1", () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toEqual(
    false
  );
});
