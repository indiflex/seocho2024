// let a = 1, b = 2;
let a = 1;
let b = 2;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let c = (a++, b++);
// const c = ((a = a + 1), (b = b + 1));
console.log('c =', c, a, b);

let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a + b);
console.log(a, b, c, d); // ?

console.log('-------------------');
const first = 'Uncle';
const last = 'Bob';
if (first) {
  console.log(first);
}
console.log(last);

let fullName = first ? first + ' ' : '';
//         'Uncle ' + 'Bob'
//            ''    + 'Bob'
fullName = fullName + last;
console.log('fullName =', fullName);

console.log(`${first}${first ? ' ' : ''}${last}`);
