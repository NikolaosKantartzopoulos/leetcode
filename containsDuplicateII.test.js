const containsDuplicateII = require("./containsDuplicateII");

test("1", () => {
  expect(containsDuplicateII([1, 2, 3, 1], 3)).toEqual(true);
});

test("1", () => {
  expect(containsDuplicateII([1, 0, 1, 1], 1)).toEqual(true);
});

test("1", () => {
  expect(containsDuplicateII([1, 2, 3, 1, 2, 3], 2)).toEqual(false);
});

test("1", () => {
  expect(containsDuplicateII([99, 99], 2)).toEqual(true);
});

test("1", () => {
  expect(containsDuplicateII([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3)).toEqual(
    true
  );
});

test("1", () => {
  expect(containsDuplicateII([1, 2, 1], 0)).toEqual(false);
});

test("1", () => {
  expect(containsDuplicateII([2, 2], 3)).toEqual(true);
});
