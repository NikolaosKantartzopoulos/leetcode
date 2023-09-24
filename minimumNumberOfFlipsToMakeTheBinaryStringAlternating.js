var minimumNumberOfFlipsToMakeTheBinaryStringAlternating = function (s) {
  let arr = [...s];
  let cnt = 0;

  while (arr[0] === arr[1]) {
    let first = arr.shift();
    arr.push(first);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      arr[i] = arr[i] == "1" ? "0" : "1";
      cnt++;
    }
  }

  return cnt;
};

minimumNumberOfFlipsToMakeTheBinaryStringAlternating("111000");

module.exports = minimumNumberOfFlipsToMakeTheBinaryStringAlternating;
