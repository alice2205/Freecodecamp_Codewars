// 4 return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(arr){
    let res = arr.sort((a, b) => a-b);
    res = [arr[arr.length-2], arr[ arr.length-1]];
      return res
}