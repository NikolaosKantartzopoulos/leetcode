var nextGreaterElementI = function (nums1, nums2) {
  let stack = new Array();

  let hash = new Map();
  nums1.forEach((elem, i) => hash.set(elem, i));

  let res = new Array(nums1.length).fill(-1);

  for (let i = 0; i < nums2.length; i++) {
    let cur = nums2[i];
    while (stack.length > 0 && cur > stack[stack.length - 1]) {
      let val = stack.pop();
      let idx = hash.get(val);
      res[idx] = cur;
    }
    if (hash.has(cur)) {
      stack.push(cur);
    }
  }
  return res;
};

nextGreaterElementI([3, 1, 2], [1, 3, 4, 2]);

module.exports = nextGreaterElementI;
