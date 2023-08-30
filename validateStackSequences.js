var validateStackSequences = function (pushed, popped) {
  let stack = [];

  while (popped.length) {
    let stackTop = stack[stack.length - 1];
    let shouldPop = stackTop === popped[0];

    if (shouldPop) {
      stack.pop();
      popped.shift();
    } else {
      let shouldPushAndPop = popped[0] === pushed[0];

      if (shouldPushAndPop) {
        pushed.shift();
        popped.shift();
      } else {
        if (!pushed.length) return false;
        else stack.push(pushed.shift());
      }
    }
  }

  if (!stack.length) return true;
};

validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]);

module.exports = validateStackSequences;
