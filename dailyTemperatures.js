var dailyTemperatures = function (temperatures) {
  let stack = [];

  let nextGreater = new Array(temperatures.length).fill(0);

  for (let i in temperatures) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let stackTop = stack.pop();

      nextGreater[stackTop] = i - stackTop;
    }
    stack.push(i);
  }
  return nextGreater;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

module.exports = dailyTemperatures;
