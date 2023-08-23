var removeDuplicatesFromSortedArrayII = function (nums) {
  let nowChecking = null;
  let numbersMoved = 0;
  let cnt = 0;
  for (let i = 0; i < nums.length - numbersMoved; i++) {
    if (nowChecking === nums[i]) {
      cnt++;
      if (cnt > 2) {
        nums.push(nums[i]);
        i--;
        nums.splice(i, 1);
        numbersMoved++;
      }
    } else if (nowChecking !== nums[i]) {
      cnt = 1;
      nowChecking = nums[i];
    }
  }

  return nums.length - numbersMoved;
};

removeDuplicatesFromSortedArrayII([1, 1, 1]);

module.exports = removeDuplicatesFromSortedArrayII;
