/* Instructions: You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

// Answer
function positiveSum(arr) {
  let sum = 0;
  //setup loop to go through array
  for (let i = 0; i < arr.length; i++) {
    // if arr[i] number is positive - greater than 0..
    if (arr[i] > 0) {
      // add it the variable 'sum'
      sum += arr[i];
    }
  }
  //return the total
  return sum;
}

//test case
console.log(positiveSum([1, 2, 3, 4, 5]));
