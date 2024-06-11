const myName = 'Sico';
// myName = 'efg'; // Syntax Error
// console.log(a // Syntax Error
// let let wat; // Syntax Error

let s: string | number = 'abc';
s = 123;
// s = false; // Type Error
console.log('Hello, World!');
console.log(`Hello, ${myName}!`);

let x: null | undefined;
let y: any;
y = 123;
y = 'abc';

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());

rocker = 123.45;
console.log(rocker.toPrecision(3));

let firstName: string | undefined | boolean;
firstName = 'abcd';
firstName?.toUpperCase();
firstName = false;
console.log(firstName);

const str: string = 'abc';
type User = { id: number; name: string; addr?: string };
const user: User = { id: 1, name: 'Hong' };
user.addr = 'Seoul';

type Emp = { id: number; name: string; dept: string | number };
const emp: Emp = {
  id: 1,
  name: 'Kim',
  dept: 'Sales',
};
emp.dept = 12;

const Y = 'y';
let Z: 'x' | 'y' | 'z' = 'x';
Z = 'y';
Z = Y;
let N: 1 | 2 | 3 = 3;
N = 2;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

const member: Member = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
};
const guest: Guest = {
  name: '김길동',
  age: 28,
};
const who = Math.random() > 0.5 ? member : guest;
