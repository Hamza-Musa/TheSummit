/* Instructions: 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

// My Answer

function grow(x) {
  let result = 1;
  for (let i of x) {
    result *= i;
  }
  return result;
}

// Test:
console.log(grow([1, 2, 3, 4])); // Output: 24
