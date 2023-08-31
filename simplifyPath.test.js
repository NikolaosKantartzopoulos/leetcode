const simplifyPath = require("./simplifyPath");

test("1", () => {
  expect(simplifyPath("/home/")).toEqual("/home");
});

test("1", () => {
  expect(simplifyPath("/../")).toEqual("/");
});

test("1", () => {
  expect(simplifyPath("/home//foo")).toEqual("/home/foo");
});

test("1", () => {
  expect(simplifyPath("/home//foo/../foo/")).toEqual("/home/foo");
});

test("1", () => {
  expect(simplifyPath("/a/./b/../../c/")).toEqual("/c");
});

test("1", () => {
  expect(simplifyPath("/a/../../b/../c//.//")).toEqual("/c");
});

test("1", () => {
  expect(simplifyPath("/...")).toEqual("/...");
});
