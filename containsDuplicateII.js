var containsDuplicateII = function (nums, k) {
  if (!k) return false;
  k = Math.min(nums.length, k);

  let set = new Set();
  let l = 0;
  let r = 0;

  while (r <= k) {
    if (set.has(nums[r])) return true;
    set.add(nums[r]);
    if (r == k) {
      break;
    } else {
      r++;
    }
  }

  while (r < nums.length) {
    set.delete(nums[l]);
    set.add(nums[r]);
    l++;
    r++;
    if (set.has(nums[r])) return true;
  }

  return false;
};

// var containsDuplicateII = function (nums, k) {
//   for (let l = 0; l < nums.length; l++) {
//     for (let r = l + 1; r <= l + k; r++) {
//       if (nums[l] === nums[r]) return true;
//     }
//   }

//   return false;
// };

containsDuplicateII([2, 2], 3);

module.exports = containsDuplicateII;
