/*
Instructions;
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

*/
//My answer
function arr2bin(arr) {
  const sum = arr.reduce((acc, val) => {
    const num = typeof val === "number" ? val : 0;
    return acc + num;
  }, 0);

  return sum.toString(2);
}

// Test cases
console.log(arr2bin([1, 2])); // Output: '11'
console.log(arr2bin([1, 2, "a"])); // Output: '11'
console.log(arr2bin([])); // Output: '0'
