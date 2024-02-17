/* Instructions: Convert number to reversed array of digits
Given a random non-negative number, 
you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

//Answer
function digitize(n) {
  // Convert the number to a string, split it into individual characters, and reverse the array
  return Array.from(String(n)).map(Number).reverse();
}

// Examples:
console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
console.log(digitize(0)); // Output: [0]
