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
  spend: number[];
};
type Guest = {
  name: string;
  age: number;
  spend: number;
};

const member: Member = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
  spend: [1, 2],
};
const guest: Guest = {
  name: '김길동',
  age: 28,
  spend: 1,
};
const who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee';

// addr property가 있다라는 것은 Member type!
if ('addr' in who) console.log(who.discountRate);
// if (who.hasOwnProperty('addr')) console.log(who.discountRate);
// if (Reflect.has(who, 'addr')) console.log(who.discountRate);
// if (typeof who.spend === 'object') console.log(who.discountRate);
console.log('typeof who.spend=', typeof who.spend);
if (typeof who.spend === 'number') {
  console.log('who.spend.toFixed=', who.spend.toFixed(2));
} else {
  console.log('who.spend.length=', who.spend.length);
}

let xarr: number[] | number = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr)) console.log(xarr.length);

let gildong = Math.random() > 0.5 && 'HongGilDong';

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  // '' | false
  gildong; // false | string
}

let a: string | undefined;
console.log(a?.length);

const hong = { id: 1, name: 'Hong', addr: 'Seoul' };
const users = [hong, { id: 2, name: 'Kim' }];

console.log(users.find(user => user.id === 3)?.['name']);

function getHong() {
  return { id: 1, name: 'Hong', addr: 'Seoul' };
}

let xuser: XUser;
let xemp: XEmp;
xuser = { id: 1, name: 'Hong' };
// xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; // freshness
xuser = { id: 1, name: 'Hong', addr: 'Seoul' } as XUser; // freshness off
xuser = hong; // freshness off
xuser = getHong();
xemp = { id: 1, name: 'Lee', addr: 'Pusan' };
xuser = xemp; // (id, name) <== (id, name, addr) : covariance
// xemp = xuser; // (id, name, addr) <== (id, name) : contravariance

function getX1(obj: XUser) {
  return obj.name;
}
function getX2(obj: XEmp) {
  return obj.name;
}

function ff(f: typeof getX1) {}

// console.log('getX=', getX(xuser));
// console.log('getX=', getX(xemp));

type XUser = { id: number; name: string };
type XEmp = { id: number; name: string; addr: string };

type XUser2 = { id: number; name: string; age: number };
const xx: XUser2 | XEmp = { id: 1, name: 'xx', addr: 'xxx', age: 3 };

const introduce = (name: string, height?: number | string) => {
  console.log(`이름 : ${name}`);
  // console.log(`키 : ${height ?? 0 + 10}`);
  // if (height) console.log(`키 : ${height + 10}`); // 'x10' or +10

  if (typeof height === 'number') console.log(`키 : ${height + 10}`);
  else if (height) console.log(`키 : ${height || '' + 10}`); // 'x10'
  // else  console.log(`키 : ${height || '' + 10}`); // 'x10'
  //Error : 'height' is possibly 'undefined'.
};

introduce('김현준'); // OK
introduce('김현준', undefined); // OK
introduce('김현준', 170); // OK
let hh = Math.random() > 0.5 ? 1 : 'x';
if (typeof hh === 'number') introduce('김현준', hh); // OK

const introduce3 = (name: string, age: number, height?: number) => {
  console.log(`이름 :  ${name}`);
  console.log(`나이 : ${age} 살`);
  if (height) {
    return console.log(`키 ${height + 10}cm`);
  }
};
introduce3('xx', 2);
introduce3('xx', 1, 2);
console.log('------------------');

// (name: string, age: number, height = 0) => void
const introduce4 = (name: string, age: number, height = 0) => {
  console.log(`이름 :  ${name}`);
  console.log(`나이 : ${age} 살`);
  console.log(`키 ${height + 10}cm`);
};
introduce4('xx', 2);
introduce4('xx', 1, 2);

function xfn1(x: number): number {
  return x ** 2;
}
var xfn2 = (x: number): number => x ** 2;

console.log('------------------');
function logSong(song: string) {
  if (!song) {
    return; // OK!  return undefined; 도 OK!
  }
  console.log(`${song}`);
  return true;
}

type VoidReturn = () => void;
const test2: VoidReturn = () => 11; // OK!

console.log('------------------');
let songLogger: (song: string) => void;

songLogger = song => {
  console.log(`${song}`);
  return true; // OK
};
// const bb = void(console.log('xxx'))
const b = songLogger('HeartBeat'); // OK
//
// var v: void;
// v = undefined;
// v = null;

// if (songLogger('HeartBeat')) console.log('*******');

// function overload (cf. C++ or Java)
// function add(a, b) { return a + b };
// function add(a, b, c) { return a + b + c + 100 };
// add(1, 2);
// add(1, 2, 3);

// in TS: 선언부
function mul(a: number, b: number): number;
function mul(a: number, b: number, c: number): number;

// 구현부
function mul(a: number, b: number, c?: number) {
  if (typeof c === 'number') return a * b * c;
  return a * b * 1000;
}

console.log(mul(1, 2)); // 마치 다른 함수인 것 처럼
console.log(mul(1, 2, 3));

function fff(this: { x: string; y: number }) {
  console.log(this.x, this.y);
}
const fffx = fff.bind({ x: 'xxx', y: 123 });
fffx();

const yuser = {
  id: 1,
  getId() {
    return this.id;
  },
};

console.log(yuser.getId());

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[400]?.toFixed(2));

interface NaverKakaoUser {
  id: number;
  // nickname?: string;
  // name?: string;
  // email: string;
  [k: string]: string | number; // index signature
}

const kUser: NaverKakaoUser = { id: 1, nick: 'aaa', age: 12 };

type T = { id: number; getId: () => number };

interface Ani {
  id: number;
  getId: () => number;
}
interface Animal extends Ani {
  bark: () => void;
}

class Dog implements Animal {
  id = 1;
  getId() {
    return this.id;
  }
  bark() {
    console.log('bow wow!');
  }
}
const lucy = new Dog();
console.log(lucy.id, lucy.getId());
lucy.bark();

const ix2: T = {
  id: 1,
  getId() {
    return this.id;
  },
};

type TT = T & { bark: () => void };
const ix3: TT = {
  id: 1,
  getId() {
    return this.id;
  },
  bark() {
    console.log('TTTTTTTTT');
  },
};

const nums1 = [1, 2, 3, 4, 5]; // number[]
const nums2 = [10, 20, 30, 40, 50]; // number[]

const result1 = nums1.concat(nums2);
// 당연히 result1은 number[]

const strings1 = ['lim', 'eun', 'ha'];
// const result2: (string | number)[] = result1.concat(strings1);
const result2 = [...result1, ...strings1];

function frest(...args: (string | number)[]) {
  console.log('XXXX=', args.length);
}

function frest2(a: string | number, b: string | number, c: string | number) {
  console.log('XXXX2=', a, b, c);
}

function frest3({ id, name }: { id: number; name: string }) {
  console.log(id, name);
}
frest3({ id: 1, name: 'Hong' });

frest('a', 'b', 1);
frest2('a', 'b', 1);
const arr1 = ['a', 'b', 1];
frest(...arr1); // frest('a', 'b', 1);

let arr2 = [1, 2, 3] as const;
arr2 = [1, 2, 3];

type IdNameDidoutAddr = [number, string, boolean, string];
let tuple1: IdNameDidoutAddr;
tuple1 = [2, 'a', false, 'Seoul'];

function tf(id: number, name: string, didOut: boolean, addr: string) {
  console.log(arguments);
}
tf(1, 'a', false, 'Seoul');

function tf2(params: IdNameDidoutAddr) {
  console.log(params);
}
tf2([1, 'a', false, 'Seoul']);
tf2(tuple1); // Key Point!!

// const { v4 } = require('uuid');
// import { v4 } from '@types/uuid';
import { v4 } from 'uuid';
import { v4 as vv4 } from 'uuid';
console.log(v4());
console.log(v4());

const Subjects = ['A', 'B', 'C'] as const; // assertion
enum Ss {
  국어, // = v4(),
  영어, // = v4(),
  수학, // = v4(),
}

const sub: Ss = Ss.국어;
const sub2: Ss = Ss.수학;
if (sub === Ss.국어) {
}

const arr3: [number, number, number] = [1, 2, 3];
const sub3 = { id: 'A' } as const;
// sub3.id = 'B';

type TA = [string, number];
const ta1: TA = ['aaa', 111];
type TB = [boolean, TA];
type TB2 = [boolean, ...TA];
const tb1: TB = [true, ta1];
console.log('🚀  tb1:', tb1);
const tb2: TB2 = [true, ...ta1];
console.log('🚀  tb2:', tb2);

type AA = (string | number)[];
type CC = [boolean, AA];
const cc: CC = [false, [1, 2, 'a']];

const SIZE = [
  { id: 'XS', price: 8000 },
  { id: 'S', price: 10000 },
  { id: 'M', price: 12000 },
  { id: 'L', price: 14000 },
  { id: 'XL', price: 15000 },
] as const;

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

// type Page = { page: number };
// type Title = { title: string };
// type PageTitle = Page | Title;

// const x1: PageTitle = { title: 'aaa' };
// const x2: PageTitle = { title: 'aaa', page: 2 };
// const x3: PageTitle = { page: 2 };

// console.log(x1.title, x3.page);
// if ('title' in x2) console.log(x2.title);

// interface IPage {
//   page: number;
// }
// interface ITitle {
//   title: string;
// }
// interface IPageTitle extends Page, Title {}

// const ifx2: IPageTitle = { title: 'aaa', page: 2 };

interface Page {
  readonly text: string;
}
function read(page: Page) {
  console.log(page.text);

  // page.text = 'Hello';
}

const pageIsh = {
  text: 'Hello, world!',
};
pageIsh.text = 'Hello'; //OK

read(pageIsh);

Object.freeze(pageIsh);
// pageIsh.text = 'xx';
console.log(pageIsh);

const counts: { apple?: number; banana?: number } = {};

counts.apple = 3;
counts.banana = 5;

interface IndexSignature {
  // [key: number]: string;
  [key: string]: number | string;
}

const is: IndexSignature = {
  0: 'hello', // '0': 'hello'
  // name: 'hong',
  age: 26,
};

declare global {
  interface Array<T> {
    // Array interface 병합
    first(): T;
    mapBy(prop: string): T[];
    filterBy: (prop: string, val: any) => T[];
  }
}

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.mapBy = function (prop: string) {
  return this.map(a => a[prop]);
};

Array.prototype.filterBy = function (prop: string, val: any) {
  return this.filter(a => a[prop] === val);
};

const xusers = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
];
console.log(xusers.mapBy('name')); // ['Hong', 'Kim']
console.log(xusers.mapBy('id')); // ['Hong', 'Kim']
console.log(xusers.filterBy('name', 'Kim'));

const arr5: number[] = [1, 2, 3];
const arr6: Array<number> = [1, 2, 3];
const arr7: Array<string | number> = ['1', 2, 3]; // (string|number)[]
