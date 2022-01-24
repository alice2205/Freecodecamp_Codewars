function uniTotal (string) {
    let arr = string.split('');
    let sum = 0;
    for (i=0; i<arr.length; i++) {
      let res = arr[i].codePointAt(0)
      sum +=res
    }
  return sum
  }