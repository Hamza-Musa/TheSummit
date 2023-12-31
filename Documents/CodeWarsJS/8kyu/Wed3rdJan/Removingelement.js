function removeEveryOther(arr) {
  //your code here
  let result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
