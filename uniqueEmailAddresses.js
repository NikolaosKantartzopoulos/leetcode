var uniqueEmailAddresses = function (emails) {
  let set = new Set();
  for (let email of emails) {
    let local = "";
    let domain = "";
    let readingDomain = false;
    let iterateUntilAtSign = false;
    for (let letter of email) {
      if (iterateUntilAtSign && letter !== "@") continue;
      if (letter === "@") {
        iterateUntilAtSign = false;
        readingDomain = true;
      } else if (letter === "." && !readingDomain) {
        continue;
      } else if (letter === "+") {
        iterateUntilAtSign = true;
      } else {
        if (!readingDomain) local += letter;
        if (readingDomain) domain += letter;
      }
    }
    set.add(local.concat("@").concat(domain));
  }
  return set.size;
};

uniqueEmailAddresses([
  "test.email+alex@leetcode.com",
  "test.email.leet+alex@code.com",
]);

module.exports = uniqueEmailAddresses;
