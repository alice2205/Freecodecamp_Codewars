// Length and two values
function alternate(n, firstValue, secondValue){
   let arr = [];
   for(let j = 0; j<n; j++) {
     if(!(j%2)) {
       arr.push(firstValue)
     } else {
       arr.pushv(secondValue)
     }
   }
   return arr
}