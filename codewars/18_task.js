// Counting sheep...
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i=0; i<arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]===true) {
        count +=1;
      } else {
        count +=0;
      } 
    }
    return count; 
}