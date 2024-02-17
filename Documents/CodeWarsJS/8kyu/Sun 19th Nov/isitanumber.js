/*
Instructions:
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

//Answer
function isDigit(s) {
  // Define the regular expression pattern for a valid number
  let pattern = /^[+-]?\d*\.?\d+$/;

  // Use the test method to check if the input string matches the pattern
  return pattern.test(s.trim());
}
