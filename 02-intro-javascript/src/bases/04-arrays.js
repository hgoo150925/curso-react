// https://es.javascript.info/array

const arr = ['ARG', 'URG', 'PYG'];
// arr.push('ARG');
// arr.push('PYG');
// no es recomendable utilizar push ya que modifica el obj principal

let arr2 = [...arr, 'VNZ'];
console.log(arr);
console.log(arr2);

let arr3 = ['UK', 'FR', 'PT'];
arr3 = [...arr3, 'SWZ'];
console.log(arr3);

const num = [1, 2, 3, 4, 5];
const num3 = num.map(n => n * 2);
console.log(num3);
