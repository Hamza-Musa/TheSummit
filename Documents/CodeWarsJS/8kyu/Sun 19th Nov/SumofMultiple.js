/* Instructions:
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/


//Answer
function sumMul(n, m) {
  // Check for invalid input (negative or zero values for n or m)
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  let sum = 0;

  // Iterate through multiples of n up to, but not including, m
  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

// Test cases
console.log(sumMul(2, 9)); // Output: 20
console.log(sumMul(3, 13)); // Output: 30
console.log(sumMul(4, 123)); // Output: 1860
console.log(sumMul(4, -7)); // Output: "INVALID"
