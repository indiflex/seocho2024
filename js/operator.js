// let a = 1, b = 2;
let a = 1;
let b = 2;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let c = (a++, b++);
// ==> a = a + 1; let c = b; b = b + 1;

// let c = (a++, ++b);
// ==> a + a + 1; b = b + 1; let c = b;

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

console.log('-------------------');
const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(parseInt('101', 36));
console.log(parseFloat('10.100'));
console.log(Number('10.100'));

console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log('----------------------');
console.log(9007199254740991 === 9007199254740991);
console.log(9007199254740991 === 9007199254740992); // false
console.log(9007199254740993 === 9007199254740992);
console.log(9007199254740993n === 9007199254740992n);

console.log(Number.isInteger(0.1));

const num = 123.456;
console.log(num.toFixed(2));
console.log(num, Math.trunc(Number(num.toFixed(2)) + 9));

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);
const ep = Math.abs(three - 0.3) < Number.EPSILON;
console.log('🚀  ep:', ep, Number.EPSILON);
console.log(Math.trunc((0.1 + 0.2) * 10) / 10);
console.log(2.5 % 1);
console.log(2.4 % 1);

console.log('===========================');
if (three === 0.3) {
  console.log('OK');
} else {
  console.log('exists garbage!');
}

const x = 2;
// x가 1이면 one, 2면 two, 3이면 three, 그 외 etc

// 1. if 문
if (x === 1) {
  console.log('one');
} else if (x === 2) {
  console.log('two');
} else if (x === 3) {
  console.log('three');
} else {
  console.log('etc');
}

let outStr = 'etc';
if (x === 1) outStr = 'one';
else if (x === 2) outStr = 'two';
else if (x === 3) outStr = 'three';

console.log(outStr);

// 2. switch 문
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('etc');
}

// 3. 3항 연산자
outStr = x === 1 ? 'one' : x === 2 ? 'two' : x === 3 ? 'three' : 'etc';
console.log('🚀  outStr:', outStr);

// 4. ||(OR) 연산자
outStr =
  (x === 1 ? 'one' : '') ||
  (x === 2 ? 'two' : '') ||
  (x === 3 ? 'three' : 'etc');
console.log('🚀  outStr:', outStr);

console.log('====================');
let i = 5;
while (i > 0) {
  console.log('🚀  i:', i);
  i = i - 1; // i--
}
i = 5;
while (i-- > 0) console.log('🚀  i:', i);

// j = 0; while(j < 5) { j++; ...}
// for (let j = 1; j <= 5; j++) {
for (let j = 1; j <= 5; j = j + 1) {
  console.log('j =', j);
}

// for (let j = 5; j > 0; j--) {
for (let j = 5; j > 0; j = j - 1) {
  console.log('j =', j);
}

console.log('------------');
i = 5;
do {
  console.log('🚀  i:', i);
} while (i-- > 1);

// ex) 1 ~ 100 까지 출력하기 (더하기) 5050

// 1. while
i = 0;
let sum = 0;
while (i < 100) {
  i = i + 1;
  sum = sum + i;
}
console.log('🚀  sum:', sum);

// 2. for
sum = 0;
for (let i = 0; i < 100; i++) {
  sum = sum + i + 1;
}
console.log('🚀  sum:', sum);

sum = 0;
for (let i = 1; i <= 100; i = i + 1) {
  // sum = sum + i;
  sum += i;
}
console.log('🚀  sum:', sum);

// 배열 출력하기
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr?.length; i++) {
  console.log(`🚀  arr[${i}]:`, arr[i]);
}
for (const t of arr) {
  console.log('🚀  t:', t);
  if (t > 2) break; // t가 2보다 크면 멈춰라!
}

console.log(' - -  - - - ');
for (const t of arr) {
  if (t % 2 === 0) continue; // 참이면 뒷부분 skip(생략)
  console.log('🚀  t:', t);
}

const user = { id: 1, name: 'Hong' };
for (const p in user) {
  console.log('🚀  p:', p, user[p]); // user['id']
}

const WEEK_NAMES = '일월화수목금토';
for (const w of WEEK_NAMES) {
  console.log('🚀  w:', w);
}
