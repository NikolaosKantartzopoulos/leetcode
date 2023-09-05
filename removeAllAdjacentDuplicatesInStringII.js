var removeAllAdjacentDuplicatesInStringII = function (s, k) {
  let stack = [];

  let res = "";
  for (let c of s) {
    if (stack.length && c == stack.at(-1).ch) {
      stack.at(-1).cnt += 1;
      if (stack.at(-1).cnt === k) {
        stack.pop();
      }
    } else {
      stack.push({ ch: c, cnt: 1 });
    }
  }

  for (let { ch, cnt } of stack) {
    res += ch.repeat(cnt);
  }

  return res;
};

removeAllAdjacentDuplicatesInStringII("deeedbbcccbdaa", 3);

// var removeAllAdjacentDuplicatesInStringII = function (s, k) {
//   let stack = [];
//   let temp = 0;
//   let cnt = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== stack.at(-1)) {
//       temp = cnt;
//       cnt = 1;
//     } else {
//       cnt++;
//     }

//     stack.push(s[i]);

//     if (cnt === k) {
//       while (cnt) {
//         stack.pop();
//         cnt--;
//       }

//       if (stack.at(-1) === s[i + 1]) {
//         for (let a = stack.length - 1; stack[a] === stack.at(-1); a--) {
//           cnt += 1;
//         }
//       }
//     }
//   }

//   return stack.join("");
// };

module.exports = removeAllAdjacentDuplicatesInStringII;
