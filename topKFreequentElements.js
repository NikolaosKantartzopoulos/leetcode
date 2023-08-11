var topKFrequent = function (nums, k) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap.hasOwnProperty(nums[i])
      ? hashMap[nums[i]]++
      : (hashMap[nums[i]] = 1);
  }
  console.log(Object.entries(hashMap));
  const sortedObject = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);
  let response = sortedObject.slice(0, k).map((elem) => elem[0]);
  return response;
};

topKFrequent([100, 100, 100, 1, 1, 1, 2, 2, 100], 2);
