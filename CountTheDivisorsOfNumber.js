//My Answer
function getDivisorsCnt(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum++;
    }
  }
  return sum;
}

//Test
console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
