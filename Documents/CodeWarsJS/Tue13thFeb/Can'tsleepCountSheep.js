/*Instructions/Task:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



*/

//My answer
function countSheep(num) {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
}

// Example usage:
console.log(countSheep(3)); // Output: "1 sheep...2 sheep...3 sheep..."
