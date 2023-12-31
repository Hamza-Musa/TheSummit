//Merging sorted integer arrays (without duplicates)
//Write a function that merges two sorted arrays into a single one.
//The arrays only contain integers.
//Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  // Combine the two arrays into one
  const combinedArray = a.concat(b);
  //Remove duplicates by creating a Set (which automatically removes duplicates)
  const uniqueArray = Array.from(new Set(combinedArray));

  //Sort the unique array in ascending order
  const sortedArray = uniqueArray.sort((a, b) => a - b);
  return sortedArray;
}

// Example usage:
const a = [1, 2, 3];
const b = [2, 3, 4, 5];
const mergedArray = mergeArrays(a, b);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]
