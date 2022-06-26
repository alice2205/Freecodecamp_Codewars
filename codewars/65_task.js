// Jaden Casing Strings
String.prototype.toJadenCase = function (St) {
  return this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};