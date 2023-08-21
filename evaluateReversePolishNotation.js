var evaluateReversePolishNotation = function (tokens) {
  let stack = [];

  function doMath(stack, operator) {
    let secondOperand = stack.pop();
    let firstOperand = stack.pop();
    if (operator === "+")
      return parseInt(parseInt(firstOperand) + parseInt(secondOperand));
    else if (operator === "-")
      return parseInt(parseInt(firstOperand) - parseInt(secondOperand));
    else if (operator === "*")
      return parseInt(parseInt(firstOperand) * parseInt(secondOperand));
    else if (operator === "/")
      return parseInt(parseInt(firstOperand) / parseInt(secondOperand));
  }

  for (let [i, token] of tokens.entries()) {
    if (/\d/.test(token)) stack.push(token);
    else stack.push(doMath(stack, token));
  }
  return stack[0];
};

evaluateReversePolishNotation(["4", "13", "5", "/", "+"]);

module.exports = evaluateReversePolishNotation;
