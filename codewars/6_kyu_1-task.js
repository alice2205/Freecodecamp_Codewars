// 1 Triangle number check
function isTriangleNumber(number) {
    let sum = number*8+1; 
    let sqrtNum = Math.sqrt(sum);
    if (Number.isInteger(sqrtNum)) {
     return true 
    } else {
      return false
    }
}