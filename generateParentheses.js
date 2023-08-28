var generateParentheses = function (n) {
  let res = [];
  let stack = [];

  function backtrack(openCnt, closedCnt) {
    if (openCnt === closedCnt && closedCnt === n) {
      res.push(stack.join(""));
      return;
    }
    if (openCnt < n) {
      stack.push("(");
      backtrack(openCnt + 1, closedCnt);
      stack.pop();
    }
    if (closedCnt < openCnt) {
      stack.push(")");
      backtrack(openCnt, closedCnt + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
};

module.exports = generateParentheses;
