function accum(s) {
  let str = s.toLowerCase()
    let x = str.split('').map((n, i) => n.repeat(i + 1));
    for (let i=0; i<x.length; i++) {
      x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1);
    }
    x = x.join('-');
    return x
}