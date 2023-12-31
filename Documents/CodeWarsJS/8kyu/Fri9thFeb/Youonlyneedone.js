/* Instructions/Task:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

//My answer

function check(a, x) {
  // Loop through each element of the array
  for (let num of a) {
    // Check if the current element matches x
    if (num === x) {
      // If a match is found, return true immediately
      return true;
    }
  }
  // If no match is found after iterating through all elements, return false
  return false;
}
