var baseballGame = function (operations) {
  let stack = [];
  for (let i of operations) {
    if (i === "C") stack.pop();
    else if (i === "D") stack.push(parseInt(stack[stack.length - 1] * 2));
    else if (i === "+")
      stack.push(
        parseInt(stack[stack.length - 1] + stack[stack.length - 2])
      );
    else stack.push(parseInt(i));
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};

module.exports = baseballGame;
