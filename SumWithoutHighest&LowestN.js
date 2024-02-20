/* Instructions:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

//My Answer:
function sumArray(array) {
  if (!array || array.length < 2) {
    return 0;
  }

  // Find the highest and lowest numbers
  const highest = Math.max(...array);
  const lowest = Math.min(...array);

  // Calculate the sum excluding the highest and lowest
  const sum = array.reduce((acc, num) => acc + num, 0) - highest - lowest;

  return sum;
}

// Example/test:
console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray([])); // Output: 0
console.log(sumArray([1])); // Output: 0
