// 2. divideArray
// Given an array of integers a of even length, your task is to split it into two arrays of equal length such that all the numbers are unique in each of them.
// There may be more than one possible answer, in which case you may return any of them. If there are no possible answers, return an empty array.
// Hint: Count the number of occurrences of each integer in a. If there are integers occurring more than twice, then there is no solution. Next, put the integers occurring twice into both answer arrays. Finally, put all other numbers in the answer arrays, following the condition that they should have equal sizes.
// Example
// For a = [2, 1, 2, 3, 3, 4], the output can be divideArray(a) = [[2, 1, 3], [2, 3, 4]].
// Answers like [[1, 2, 3], [2, 3, 4]] or [[4, 2, 3], [3, 2, 1]] would also be considered correct.
// For a = [1, 2, 2, 1], the output can be divideArray(a) = [[1, 2], [2, 1]].
// Again, there are other possible answers.
// For a = [2, 2, 3, 3, 2, 2], the output should be divideArray(a) = [].
// No matter how we try to split this array, there will be at least two 2s in at least one of the resulting arrays. So the answer is [].
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] array.integer a
// An array of integers. It is guaranteed that a has even length.
// Guaranteed constraints:
// 2 ≤ a.length ≤ 104,
// 1 ≤ a[i] ≤ 105.
// [output] array.array.integer
// Return an empty array if there is no solution. If a solution exists, return an array of two arrays - a distribution of a where each of these two arrays are of equal length and each contains unique elements.

const divideArray = function (array, n) {
  let arrayLen = Math.max(array.length / n);
  console.log(arrayLen);
  let Results = [];
  for (let i = 0; i < n; i++) {
    let Len = arrayLen * (i + 1);
    if (Len <= array.length) {
      if (
        Results.indexOf(array.slice(arrayLen * i, arrayLen * (i + 1))) === -1
      ) {
        Results.push(array.slice(arrayLen * i, arrayLen * (i + 1)));
      }
    }
  }
  return Results;
};
console.log(divideArray([2, 1, 3, 3, 2, 4], 2));
