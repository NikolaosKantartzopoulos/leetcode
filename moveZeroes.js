var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
    }
    j++;
  }
};

module.exports = moveZeroes;
