var validParentheses = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(")");
    if (s[i] === ")" && stack.pop() != ")") return false;
    if (s[i] === "[") stack.push("]");
    if (s[i] === "]" && stack.pop() != "]") return false;
    if (s[i] === "{") stack.push("}");
    if (s[i] === "}" && stack.pop() != "}") return false;
  }

  if (stack.length == 0) return true;
  return false;
};
