// Convert number to reversed array of digits
function digitize(n) {
  let x = Array.from(String(n), Number).reverse();
  return x;
}