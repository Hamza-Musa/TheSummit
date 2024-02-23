/* Instructions:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//My Answers

//forEach
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  arr1.forEach((e) => (sum += e));
  arr2.forEach((e) => (sum += e));
  return sum;
}

/* For let loop
function arrayPlusArray(arr1, arr2) {
//   let sum = 0;
//     for (let i=0; i< arr1.length; i++) {
//     sum += arr1[i]
//   }
//   for (let i=0; i< arr2.length; i++) {
//     sum += arr2[i]
//   }
//   return sum
// }
*/

/* for let of
function arrayPlusArray(arr1, arr2){
  let sum = 0;
  for (let e of arr1) {
    sum += e
  }
  for (let e of arr2) {
    sum += e
  }
  return sum
}
*/
