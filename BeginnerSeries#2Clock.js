function past(h, m, s) {
  // Convert hours, minutes, and seconds to milliseconds
  const totalMilliseconds = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  return totalMilliseconds;
}

// Example usage:
// const h = 0;
// const m = 1;
// const s = 1;
// const result = timeSinceMidnight(h, m, s);
// console.log(result);
