/* Instructions/Task:
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

//My Answer
function invert(array) {
  return array.map((i) => - i);
}

// Arrow syntax vs of my answer
const invert = array => array.map((i) => - i); 

// Test cases:
const numbers = [1, 2, 3, 4, 5];
const invertedNumbers = invert(numbers);
console.log(invertedNumbers); // Output: [-1, -2, -3, -4, -5]
