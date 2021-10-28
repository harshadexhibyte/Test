// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

function CheckMatrix(M) {
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if ((M[i][j] !== 1 && i === j) || (M[i][j] && i !== j)) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  CheckMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  CheckMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);

// [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
// ],
//   [
//     [1, 1, 1],
//     [0, 0, 0],
//     [1, 1, 1],
//   ];
// 1 -> 1 = 1
// 0 -> 0 = 1
// 1 -> 0 = 0
// 0 -> 1 = 0

function CompaireMatrices(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result[i] = [];
    for (var j = 0; j < m1.length; j++) {
      if (m1[i][j] === m2[m1.length - 1 - i][m1.length - 1 - j]) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }
  return result;
}
var m1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
var m2 = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];

console.log(CompaireMatrices(m1, m2));
