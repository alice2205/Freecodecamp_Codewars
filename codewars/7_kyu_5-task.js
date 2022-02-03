// Sum of Minimums!
function sumOfMinimums(arr) {
  let x = 0;
  for(let i = 0; i<arr.length; i++) {
  x += Math.min.apply(null, arr[i])
  }
 return x
}