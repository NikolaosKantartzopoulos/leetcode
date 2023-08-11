var NumArray = function (nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function (left, right) {
  // console.log(this.slice(0, 2));
  console.log(this.nums);
  return this.nums.slice(left, right).reduce((acc, cur) => (acc += cur));
};

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 2);
console.log(param_1);
