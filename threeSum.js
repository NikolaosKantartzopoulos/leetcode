var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let lp = i + 1;
    let rp = nums.length - 1;
    while (lp < rp) {
      const threeSum = nums[i] + nums[lp] + nums[rp];
      if (threeSum > 0) {
        rp--;
      } else if (threeSum < 0) {
        lp++;
      } else {
        res.push([nums[i], nums[lp], nums[rp]]);
        rp--;
        lp++;
        while (nums[lp] === nums[lp - 1] && lp < rp) {
          lp++;
        }
      }
    }
  }
  return res;
};

module.exports = threeSum;
