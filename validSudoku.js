var validSudoku = function (board) {
  let columns = new Array(9).fill().map((u) => []);
  let squares = new Array(9).fill().map((u) => []);

  function filterDots(inp) {
    return inp.filter((e) => e !== ".");
  }

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    let row = board[rowIndex];
    let rowSet = new Set(filterDots(row));
    if (rowSet.size != filterDots(row).length) return false;

    for (let colIndex = 0; colIndex < 9; colIndex++) {
      columns[colIndex].push(row[colIndex]);

      let squaresRow = Math.floor(colIndex / 3);
      let squaresCol = Math.floor(rowIndex / 3);
      squares[3 * squaresRow + squaresCol].push(board[rowIndex][colIndex]);
    }
  }

  for (let column of columns) {
    let colSet = new Set(filterDots(column));
    if (colSet.size != filterDots(column).length) return false;
  }

  for (let square of squares) {
    let squareSet = new Set(filterDots(square));
    if (squareSet.size != filterDots(square).length) return false;
  }

  return true;
};

module.exports = validSudoku;
