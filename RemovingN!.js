/* Instructions:
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

// My Answer

function remove(s, n) {
  // Initalize a variable to count removed exclamation marks
  let removedCount = 0;
  // Convert the string to an array of characters for easier manipulation
  const chars = s.split("");
  // Iterate through the characters
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "!" && removedCount < n) {
      // If the character is '!' and we haven't removed enough yet, remove it
      chars.splice(i, 1);
      i--; // Decrement i to recheck the current index, as the array length
      removedCount++;
    }
  }
  // Convert the array back to a string and return the result
  return chars.join("");
}

// Examples
console.log(remove("Hi!", 1)); // Output: "Hi"
console.log(remove("Hi!", 100)); // Output: "Hi"
console.log(remove("Hi!!!", 1)); // Output: "Hi!!"
console.log(remove("!Hi", 1)); // Output: "Hi"
console.log(remove("!Hi!", 100)); // Output: "Hi"
console.log(remove("!!!Hi !!hi!!! !hi", 1)); // Output: "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 3)); // Output: "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 5)); // Output: "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 100)); // Output: "Hi hi hi"

// Best Practice
function remove(s, n) {
  for (var i = 0; i < n; i++) s = s.replace("!", "");
  return s;
}
