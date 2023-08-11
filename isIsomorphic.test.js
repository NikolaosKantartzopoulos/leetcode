const isIsomorphic = require("./isIsomorphic");

test("1", () => {
  expect(isIsomorphic("egg", "add")).toBe(true);
});
test("1", () => {
  expect(isIsomorphic("foo", "bar")).toBe(false);
});
test("1", () => {
  expect(isIsomorphic("paper", "title")).toBe(true);
});
test("1", () => {
  expect(isIsomorphic("badc", "baba")).toBe(false);
});
