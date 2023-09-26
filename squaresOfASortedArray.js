var squaresOfASortedArray = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  let res = [];
  let resPointer = nums.length - 1;

  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      res[resPointer] = nums[l] ** 2;
      l++;
    } else {
      res[resPointer] = nums[r] ** 2;
      r--;
    }
    resPointer--;
  }
  return res;
};

// var squaresOfASortedArray = function (nums) {
//   return nums.map((e) => e ** 2).sort((a, b) => a - b);
// };

module.exports = squaresOfASortedArray;
