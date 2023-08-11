var paschalsTriangle = function (numRows) {
  if (numRows == 0) return [];

  function createTemp(prevArr) {
    return [0].concat(prevArr).concat([0]);
  }

  function createNewArray(inputArr) {
    let toRet = [];
    for (let i = 0; i < inputArr.length - 1; i++) {
      toRet.push(inputArr[i] + inputArr[i + 1]);
    }
    return toRet;
  }

  let ans = [[1]];

  while (numRows > 1) {
    ans.push(createNewArray(createTemp(ans[ans.length - 1])));
    numRows--;
  }
  return ans;
};

module.exports = paschalsTriangle;
