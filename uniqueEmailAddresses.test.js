const uniqueEmailAddresses = require("./uniqueEmailAddresses");

test("1", () => {
  expect(
    uniqueEmailAddresses([
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com",
    ])
  ).toBe(2);
});

test("2", () => {
  expect(
    uniqueEmailAddresses([
      "a@leetcode.com",
      "b@leetcode.com",
      "c@leetcode.com",
    ])
  ).toBe(3);
});

test("2", () => {
  expect(
    uniqueEmailAddresses([
      "test.email+alex@leetcode.com",
      "test.email.leet+alex@code.com",
    ])
  ).toBe(2);
});

["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"];
