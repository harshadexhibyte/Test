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
    [1, 0, 1],
  ])
);
