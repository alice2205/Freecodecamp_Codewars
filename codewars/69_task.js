// Highest and Lowest
function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a, b)=> b-a)
  let newArr = [arr[0], arr[arr.length-1]].join(' ')
  return newArr
} 