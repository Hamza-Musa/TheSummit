/*Instructions/Task: 
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/
//My Answer
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    const volume = length * width * height;
    return volume;
  }
}

//Test
console.log(Kata.getVolumeOfCuboid(10, 10, 10)); // Output: 1000
