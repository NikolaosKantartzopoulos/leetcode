var arraySign = function (nums) {
  let product = nums.reduce((acc, cur) => acc * cur);
  if (product < 0) return -1;
  else if (product > 0) return 1;
  else return 0;
};
