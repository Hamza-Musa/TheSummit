/* Instructions/Task:
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

*/

// My Answer
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else if (l !== w) {
    return l + w + l + w;
  }
};

//Test
console.log(areaOrPerimeter(3, 3)); // should equal 9
console.log(areaOrPerimeter(6, 10)); // should equal 32
