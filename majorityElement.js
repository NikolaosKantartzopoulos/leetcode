var majorityElement = function (nums) {
  if (nums.length == 1) return nums[0];
  let theMap = new Map();

  for (let num of nums) {
    if (!theMap.has(num)) theMap.set(num, 1);
    else {
      theMap.set(num, theMap.get(num) + 1);
      if (theMap.get(num) > nums.length / 2) return num;
    }
  }
};

majorityElement([3, 2, 3]);

module.exports = majorityElement;
