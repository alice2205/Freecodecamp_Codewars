// JavaScript Array Filter
function getEvenNumbers(numbersArray){
  let res = numbersArray.filter(function(elem) {
    if (elem % 2 == 0) {
      return true;
    } else {
      return false;
    }
    })
    return res;
}