// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
   let x = numbers.sort((a, b)=> a-b);
   let y = x[0]+x[1]
   return y
}