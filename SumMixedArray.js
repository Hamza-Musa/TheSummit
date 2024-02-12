/* Instructions: 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

// My Answer
function sumMix(x) {
  let sum = 0; // Initialize sum to 0
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]); // Convert each element to a number before adding
  }
  return sum;
}

//Test
console.log(sumMix([9, 3, "7", "3"])); // Output: 22
