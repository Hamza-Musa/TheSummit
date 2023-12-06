/* 
Instructions
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.


*/

//Best practices
const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;

//My answer
function amIWilson(p) {
  // Check if the given number is a prime number
  if (!isPrime(p)) {
    return false;
  }

  // Check the Wilson prime condition
  return (factorial(p - 1) + 1) % (p * p) === 0;
}

// Helper function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Helper function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(amIWilson(5)); // Output: true (5 is a Wilson prime)
console.log(amIWilson(6)); // Output: false (6 is not a Wilson prime)
