/*Instructions/Task:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

//My Answer
const reverseSeq = (n) => {
  // Check if n is greater than 0
  if (n <= 0) {
    return [];
  }
  //Initialize an empty array to store integers
  const result = [];
  //Loop from n down to 1 and push each integer to the result array
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};

// Example usage:
console.log(reverseSeq(5)); // Output: [5, 4, 3, 2, 1]
