var removeKDigits = function (num, k) {
  let stack = [];

  for (let n of num) {
    while (stack.length && k > 0 && stack.at(-1) > n) {
      stack.pop();
      k--;
    }

    stack.push(n);
  }
  while (stack.length && k > 0) {
    stack.pop();
    k--;
  }
  while (stack.length && stack[0] == "0") {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
};

module.exports = removeKDigits;
