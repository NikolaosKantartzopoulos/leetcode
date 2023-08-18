// Hash map
// Time Complexity: O(n) - Space Complexity O(n)

var subarraySumEqualsK = function (nums, k) {
  let hashMap = new Map();
  let cnt = 0;
  let sum = 0;

  hashMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hashMap.has(sum - k)) {
      cnt += hashMap.get(sum - k);
    }
    hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
  }
  return cnt;
};

// Brute force
// Time Complexity: O(n^2) - Space Complexity O(1)

// var subarraySumEqualsK = function (nums, k) {
//   let cnt = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums.slice(i, j + 1).reduce((acc, curr) => acc + curr) == k)
//         cnt++;
//     }
//   }
//   return cnt;
// };

subarraySumEqualsK([1, 1, 1], 2);

module.exports = subarraySumEqualsK;
