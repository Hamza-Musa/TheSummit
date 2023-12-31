//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Instructions:
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// *My Answer*
String.prototype.toAlternatingCase = function () {
  // Split the string into an array of characters
  return this.split("")
    .map((char) => {
      // Check if the character is lowercase and conver it to uppercase if so
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      }
      // If the character is uppercase, convert it to lowercase
      else {
        return char.toLowerCase();
      }
    })
    .join(""); // Join the modified characters back into a single string and return the result
};

// Example usage:
console.log("hello world".toAlternatingCase()); // Output: "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // Output: "hello world"
