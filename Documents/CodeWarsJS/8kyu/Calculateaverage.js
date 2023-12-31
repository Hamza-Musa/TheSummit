//Instructions
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) {
    return 0; // Handle empty arrays
  }

  let sum = 0; // Initialize a sum variable
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // Add each element to the sum
  }

  return sum / array.length; // Calculate and return the average
}
