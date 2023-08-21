var minimumDifferenceBetweenHighestAndLowestofKScores = function (nums, k) {
  if (nums.length === 1 || k === 1) return 0;

  nums = nums.sort((a, b) => (a - b > 0 ? 1 : -1));
  let i = 0;
  let j = k - 1;
  let min = Infinity;

  while (j < nums.length) {
    if (nums[j] - nums[i] < min) min = nums[j] - nums[i];
    i++;
    j++;
  }
  return min;
};
minimumDifferenceBetweenHighestAndLowestofKScores([9, 4, 1, 7], 2);

module.exports = minimumDifferenceBetweenHighestAndLowestofKScores;
