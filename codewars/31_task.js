// Correct the mistakes of the character recognition software
function correct(string){ 
  let res = string.split('');
  for (let i=0; i<res.length; i++) {
      if (res[i]==='5') {
          res[i]='S'
      } else if(res[i] === '0') {
          res[i]="O"
          console.log(res);
      } else if (res[i]==='1') {
          res[i]="I"
      }
  }
  return res.join('');
}