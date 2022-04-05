// Powers of 2
function powersOfTwo(n){
  let arr = []; 
   for (let i=n; i>=0; i--) {
     arr.push(2**i)
   }
   return arr.reverse()
}