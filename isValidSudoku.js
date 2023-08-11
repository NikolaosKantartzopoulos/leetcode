//check test setup

var isValidSudoku = function (nums) {
  function filterDots(arr) {
    return arr.filter((elem) => elem !== ".");
  }

  function getColumns(matrix) {
    let [row] = matrix;
    return row.map((value, column) => matrix.map((row) => row[column]));
  }

  function getSquares(matrix) {
    for (let row = 0; row < 9; row++) {
      for (let position = 0; position < 9; position++) {
        let xGrd = 3 * Math.floor(row / 3) + Math.floor(position / 3);
        let yGrd = 3 * (row % 3) + (position % 3);
        let grdBox = matrix[xGrd][yGrd];
        console.log(xGrd);
      }
    }
  }

  function checkValidity(arr) {
    for (let row of arr) {
      let rowSet = new Set(filterDots(row));
      if (filterDots(row).length != rowSet.size) return false;
    }
    return true;
  }

  if (checkValidity(nums) && checkValidity(getColumns(nums))) {
    // console.log(getColumns(nums));
  }

  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

module.exports = isValidSudoku;
