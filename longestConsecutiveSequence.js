var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let seqLength = 0;
      while (set.has(nums[i] + seqLength)) seqLength++;
      if (seqLength > max) max = seqLength;
    }
  }
  return max;
};

module.exports = longestConsecutive;
