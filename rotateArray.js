var rotateArray = function (nums, k) {
  if (nums.length <= 1) return nums;
  k = k % nums.length;

  nums.reverse();

  for (let lp = 0, rp = k - 1; lp < rp; lp++, rp--) {
    let temp = nums[lp];
    nums[lp] = nums[rp];
    nums[rp] = temp;
  }

  for (let lp = k, rp = nums.length - 1; lp < rp; lp++, rp--) {
    let temp = nums[lp];
    nums[lp] = nums[rp];
    nums[rp] = temp;
  }

  return nums;
};

// var rotateArray = function (nums, k) {
//   if (nums.length <= 1) return nums;
//   let lp = 0;
//   let rp = nums.length - 1;

//   while (k > 0) {
//     let swapTemp = nums[lp];
//     nums[lp] = nums[rp];
//     nums[rp] = swapTemp;

//     let p1 = rp - 1;
//     let p2 = rp;

//     while (p1 !== lp) {
//       let temp = nums[p1];
//       nums[p1] = nums[p2];
//       nums[p2] = temp;
//       p1--;
//       p2--;
//     }
//     k--;
//   }
//   return nums;
// };

// var rotateArray = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.splice(0, 0, nums.pop());
//   }
//   return nums;
// };
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
module.exports = rotateArray;
