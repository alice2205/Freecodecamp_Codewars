// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove (string) {  
  let x = string.split('').reverse();
   for (let i = 0; i<x.length; i++) {
     while (x[i] === '!') {
     let y = x.indexOf(x[i]);
       if(y >= 0) {
       x.splice(y,1);
       } 
    }
    return x.reverse().join('')
    }
}