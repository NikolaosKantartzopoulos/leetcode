const removeAllAdjacentDuplicatesInStringII = require("./removeAllAdjacentDuplicatesInStringII");

test("1", () => {
  expect(removeAllAdjacentDuplicatesInStringII("abcd", 2)).toEqual("abcd");
});

test("1", () => {
  expect(
    removeAllAdjacentDuplicatesInStringII("deeedbbcccbdaa", 3)
  ).toEqual("aa");
});

test("1", () => {
  expect(
    removeAllAdjacentDuplicatesInStringII("pbbcggttciiippooaais", 2)
  ).toEqual("ps");
});
