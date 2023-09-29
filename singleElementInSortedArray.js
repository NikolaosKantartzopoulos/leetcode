var singleElementInSortedArray = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor(right - left / 2);
    if (nums[mid] == nums[mid + 1]) mid = mid - 1;
    if ((mid - left) % 2) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
};

module.exports = singleElementInSortedArray;
