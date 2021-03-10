
exports.min = function min (array) {
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

let sum = 0;
exports.avg = function avg (array) {
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum/array.length;
}
