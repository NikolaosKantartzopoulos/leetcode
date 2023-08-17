var findTheDifferenceOfTwoArrays = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();

  for (num of nums1) {
    if (!nums2.includes(num)) set1.add(num);
  }

  for (num of nums2) {
    if (!nums1.includes(num)) set2.add(num);
  }

  return [[...set1], [...set2]];
};

findTheDifferenceOfTwoArrays([1, 2, 3], [2, 4, 6]);

module.exports = findTheDifferenceOfTwoArrays;
