var productExceptSelf = function (nums) {
  let helper = 1;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(helper);
    helper *= nums[i];
  }

  helper = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * helper;
    helper *= nums[i];
  }

  return res;
};

productExceptSelf([1, 2, 3, 4]);
productExceptSelf([-1, 1, 0, -3, 3]);

module.exports = productExceptSelf;
