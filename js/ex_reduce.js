const square = n => n ** 2;
const sqrt = n => Math.sqrt(n);
const cube = n => n ** 3;

const arr = [1, 2, 3, 4, 5];

const ret1 = arr
  .map(a => a ** 2)
  .map(a => Math.sqrt(a))
  .map(a => a ** 3);

console.log('🚀  ret:', ret1);

// map -> reduce
const ret2 = arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []);
console.log('🚀  ret2:', ret2);

const ret3 = [square, sqrt, cube].reduce((acc, f) => acc.map(v => f(v)), arr);
console.log('🚀  ret3:', ret3);

const ret4 = [cube, sqrt, square].reduce((acc, f) => acc.map(v => f(v)), arr);
console.log('🚀  ret4:', ret4);

function calc(values, fns) {
  return fns.reduce((results, f) => results.map(v => f(v)), values);
}
const ret5 = calc([2, 3, 4], [sqrt, cube, square]);
console.log('🚀  ret5:', ret5);
