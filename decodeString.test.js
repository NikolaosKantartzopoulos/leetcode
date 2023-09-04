const decodeString = require("./decodeString");

test("1", () => {
  expect(decodeString("3[a]2[bc]")).toEqual("aaabcbc");
});

test("1", () => {
  expect(decodeString("3[a2[c]]")).toEqual("accaccacc");
});

test("1", () => {
  expect(decodeString("2[abc]3[cd]ef")).toEqual("abcabccdcdcdef");
});
