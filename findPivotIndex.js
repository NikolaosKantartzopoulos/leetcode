var findPivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur);
  leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let rightSum = totalSum - leftSum - cur;
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += cur;
  }
  return -1;
};

module.exports = findPivotIndex;
