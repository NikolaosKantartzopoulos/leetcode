var findDisappearedNumbers = function (nums) {
  // let range = nums.length;
  // let res = [];
  // for (let i = 0; i < nums.length; i++){

  // }

  let set = new Set(nums.map((elem, index) => index + 1));

  for (let num of nums) if (set.has(num)) set.delete(num);

  return [...set];
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

module.exports = findDisappearedNumbers;
