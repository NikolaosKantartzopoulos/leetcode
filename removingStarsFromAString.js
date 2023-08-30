var removingStarsFromAString = function (s) {
  let res = [];

  for (let letter of s) {
    if (letter === "*") {
      res.pop();
    } else {
      res.push(letter);
    }
  }

  return res.join("");
};

module.exports = removingStarsFromAString;
