/*Instructions/Task:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

*/

//My Answer
function otherAngle(a, b) {
  const totalDegrees = 180;
  let c = totalDegrees - (a + b);
  return c;
}
// 180 degree total in a triangle

//Test
console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
