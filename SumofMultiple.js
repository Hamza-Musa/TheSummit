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
