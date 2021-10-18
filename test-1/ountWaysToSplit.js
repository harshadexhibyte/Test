// countWaysToSplit
//  You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.
//  NOTE: + refers to string concatenation.
//  Example
//  For s = "xzxzx", the output should be countWaysToSplit(s) = 5.
//  Consider all the ways to split s into three non-empty parts:
//  If a = "x", b = "z" and c = "xzx", then all a + b = "xz", b + c = "zxzx" and c + a = xzxx are different.
//  If a = "x", b = "zx" and c = "zx", then all a + b = "xzx", b + c = "zxzx" and c + a = zxx are different.
//  If a = "x", b = "zxz" and c = "x", then all a + b = "xzxz", b + c = "zxzx" and c + a = xx are different.
//  If a = "xz", b = "x" and c = "zx", then a + b = b + c = "xzx". Hence, this split is not counted.
//  If a = "xz", b = "xz" and c = "x", then all a + b = "xzxz", b + c = "xzx" and c + a = xxz are different.
//  If a = "xzx", b = "z" and c = "x", then all a + b = "xzxz", b + c = "zx" and c + a = xxzx are different.
//  Since there are five valid ways to split s, the answer is 5.
//  Input/Output
//  [execution time limit] 4 seconds (js)
//  [input] string s
//  A string to split.
//  Guaranteed constraints:
//  3 ≤ s.length ≤ 100.
//  [output] integer
//  The number of ways to split the given string.
//  ======================================================================================================================

countWaysToSplit = function (s) {
  let Strlen = s.length;
  let Temp = 0;

  console.log(`String is :${s},\nlength of string ${Strlen}`);

  for (let i = 0; i < Strlen - 2; i++) {
    for (let j = i + 1; j < Strlen - 1; j++) {
      let a = s.slice(0, i + 1);
      let b = s.slice(i + 1, j + 1);
      let c = s.slice(j + 1, Strlen);
      if (a + b != b + c && b + c != c + a && a + b != c + a) {
        Temp++;
      }
    }
  }
  console.log("The answer is:", Temp);
};

countWaysToSplit(prompt("Enter String:"));
