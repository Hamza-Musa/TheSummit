//Instructions:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// function removeExclamationMarks(str) {
//   // Use the split and join methods to remove exclamation marks
//   const arr = str.split('!');
//   return arr.join('');
// }
