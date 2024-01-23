//Instructions/Task:
/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

//My answer
function century(year) {
  if (year <= 100) {
    return 1;
  } else if (year <= 200) {
    return 2;
  } else if (year <= 300) {
    return 3;
  } else if (year <= 400) {
    return 4;
  } else if (year <= 500) {
    return 5;
  } else if (year <= 600) {
    return 6;
  } else if (year <= 700) {
    return 7;
  } else if (year <= 800) {
    return 8;
  } else if (year <= 900) {
    return 9;
  } else if (year <= 1000) {
    return 10;
  } else if (year <= 1100) {
    return 11;
  } else if (year <= 1200) {
    return 12;
  } else if (year <= 1300) {
    return 13;
  } else if (year <= 1400) {
    return 14;
  } else if (year <= 1500) {
    return 15;
  } else if (year <= 1600) {
    return 16;
  } else if (year <= 1700) {
    return 17;
  } else if (year <= 1800) {
    return 18;
  } else if (year <= 1900) {
    return 19;
  } else if (year <= 2000) {
    return 20;
  } else if (year <= 2100) {
    return 21;
  } else {
    return 22;
  }
}

console.log(century(1705));
