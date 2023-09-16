var maximumNumberOfVowelsInASubstringOfGivenLength = function (s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  let l = 0;
  let r = 0;
  let cnt = 0;

  while (r < s.length) {
    let len = r - l + 1;

    if (len > k) {
      if (set.has(s[l])) cnt--;
      l++;
    }

    if (set.has(s[r])) {
      cnt++;
    }
    r++;

    max = Math.max(max, cnt);
  }
  return max;
};

// I fucking solved the wrong problem!d

// var maximumNumberOfVowelsInASubstringOfGivenLength = function (s, k) {
//   let vowels = new Set(["a", "e", "i", "o", "u"]);
//   let max = 0;
//   let l = 0;
//   let r = 0;

//   while (r < s.length) {
//     if (r - l === k) return k;

//     let len = r - l + 1;
//     let cur = s[r];

//     if (!vowels.has(cur)) {
//       l++;
//       if (l > r) {
//         r = l;
//       }
//       continue;
//     }

//     max = Math.max(len, max);
//     r++;
//   }

//   return max;
// };

maximumNumberOfVowelsInASubstringOfGivenLength("leetcode", 3);

module.exports = maximumNumberOfVowelsInASubstringOfGivenLength;
