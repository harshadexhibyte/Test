var trafficMap = function (matrix) {
  validPaths = [
    //  4 directions (up, right, down ,left) 1 = open, 0 = close

    [0, 1, 0, 1], // 1 which means a street connecting the left cell and the right cell.
    [1, 0, 1, 0], // 2 which means a street connecting the upper cell and the lower cell.
    [0, 0, 1, 1], // 3 which means a street connecting the left cell and the lower cell.
    [0, 1, 1, 0], // 4 which means a street connecting the right cell and the lower cell.
    [1, 1, 0, 0], // 5 which means a street connecting the right cell and the upper cell.
    [1, 0, 0, 1], // 6 which means a street connecting the left cell and the upper cell
  ];

  var n = matrix.length - 1;
  var m = matrix[0].length - 1;

  if (!(matrix[0][0] === 0 || matrix[0][0] === 2)) return false;
  if (!(matrix[n][m] === 0 || matrix[n][m] === 4)) return false;

  var checkDirections = function (i, j, matrix) {
    if (i < 0 || i > n || j < 0 || j > m) return false;
    if (i == n && j == m) return true;
    var current = matrix[i][j];
    var dirs = validPaths[current];
    matrix[i][j] = 0; // mark as visited
    // up with down
    if (
      dirs[0] == 1 &&
      i > 0 &&
      validPaths[matrix[i - 1][j]][2] == 1 &&
      checkDirections(i - 1, j, matrix)
    ) {
      return true;
    }
    // right with left
    if (
      dirs[1] == 1 &&
      j < m &&
      validPaths[matrix[i][j + 1]][3] == 1 &&
      checkDirections(i, j + 1, matrix)
    ) {
      return true;
    }
    // down with up

    if (
      dirs[2] == 1 &&
      i < n &&
      validPaths[matrix[i + 1][j]][0] == 1 &&
      checkDirections(i + 1, j, matrix)
    ) {
      return true;
    }
    // left with right

    if (
      dirs[3] == 1 &&
      j > 0 &&
      validPaths[matrix[i][j - 1]][1] == 1 &&
      checkDirections(i, j - 1, matrix)
    ) {
      return true;
    }
    debugger;
    matrix[i][j] = current; // restore the visited value
    return false;
  };
  return checkDirections(0, 0, matrix);
};

//it's return true;
const matrix = [
  [0, 2, 1],
  [5, 4, 0],
];

//it's return false;

/*
 const matrix = [
   [0, 2, 1],
   [5, 4, 1],
 ];
 
 */

console.log(trafficMap(matrix));
