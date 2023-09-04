var decodeString = function (s) {
  let stack = [];

  for (let letter of s) {
    let token = "";
    let num = "";

    if (letter !== "]") {
      stack.push(letter);
      continue;
    }

    while (stack.at(-1) !== "[") token = stack.pop() + token;
    stack.pop();

    while (!isNaN(stack.at(-1))) num = stack.pop() + num;

    const segment = token.repeat(Number(num));

    stack.push(segment);
  }

  return stack.join("");
};

decodeString("3[a2[c]]");

module.exports = decodeString;
