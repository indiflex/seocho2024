"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = 'Sico';
// myName = 'efg'; // Syntax Error
// console.log(a // Syntax Error
// let let wat; // Syntax Error
let s = 'abc';
s = 123;
// s = false; // Type Error
console.log('Hello, World!');
console.log(`Hello, ${myName}!`);
let x;
let y;
y = 123;
y = 'abc';
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());
rocker = 123.45;
console.log(rocker.toPrecision(3));
let firstName;
firstName = 'abcd';
firstName?.toUpperCase();
firstName = false;
console.log(firstName);
const str = 'abc';
const user = { id: 1, name: 'Hong' };
user.addr = 'Seoul';
const emp = {
    id: 1,
    name: 'Kim',
    dept: 'Sales',
};
emp.dept = 12;
const Y = 'y';
let Z = 'x';
Z = 'y';
Z = Y;
let N = 3;
N = 2;
const member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    spend: [1, 2],
};
const guest = {
    name: '김길동',
    age: 28,
    spend: 1,
};
const who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee';
// addr property가 있다라는 것은 Member type!
if ('addr' in who)
    console.log(who.discountRate);
// if (who.hasOwnProperty('addr')) console.log(who.discountRate);
// if (Reflect.has(who, 'addr')) console.log(who.discountRate);
// if (typeof who.spend === 'object') console.log(who.discountRate);
console.log('typeof who.spend=', typeof who.spend);
if (typeof who.spend === 'number') {
    console.log('who.spend.toFixed=', who.spend.toFixed(2));
}
else {
    console.log('who.spend.length=', who.spend.length);
}
let xarr = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr))
    console.log(xarr.length);
let gildong = Math.random() > 0.5 && 'HongGilDong';
if (gildong) {
    gildong.toUpperCase(); // string
}
else {
    // '' | false
    gildong; // false | string
}
let a;
console.log(a?.length);
const hong = { id: 1, name: 'Hong', addr: 'Seoul' };
const users = [hong, { id: 2, name: 'Kim' }];
console.log(users.find(user => user.id === 3)?.['name']);
function getHong() {
    return { id: 1, name: 'Hong', addr: 'Seoul' };
}
let xuser;
let xemp;
xuser = { id: 1, name: 'Hong' };
// xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; // freshness
xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; // freshness off
xuser = hong; // freshness off
xuser = getHong();
xemp = { id: 1, name: 'Lee', addr: 'Pusan' };
xuser = xemp; // (id, name) <== (id, name, addr) : covariance
// xemp = xuser; // (id, name, addr) <== (id, name) : contravariance
function getX1(obj) {
    return obj.name;
}
function getX2(obj) {
    return obj.name;
}
function ff(f) { }
const xx = { id: 1, name: 'xx', addr: 'xxx', age: 3 };
const introduce = (name, height) => {
    console.log(`이름 : ${name}`);
    // console.log(`키 : ${height ?? 0 + 10}`);
    // if (height) console.log(`키 : ${height + 10}`); // 'x10' or +10
    if (typeof height === 'number')
        console.log(`키 : ${height + 10}`);
    else if (height)
        console.log(`키 : ${height || '' + 10}`); // 'x10'
    // else  console.log(`키 : ${height || '' + 10}`); // 'x10'
    //Error : 'height' is possibly 'undefined'.
};
introduce('김현준'); // OK
introduce('김현준', undefined); // OK
introduce('김현준', 170); // OK
let hh = Math.random() > 0.5 ? 1 : 'x';
if (typeof hh === 'number')
    introduce('김현준', hh); // OK
const introduce3 = (name, age, height) => {
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
const introduce4 = (name, age, height = 0) => {
    console.log(`이름 :  ${name}`);
    console.log(`나이 : ${age} 살`);
    console.log(`키 ${height + 10}cm`);
};
introduce4('xx', 2);
introduce4('xx', 1, 2);
function xfn1(x) {
    return x ** 2;
}
var xfn2 = (x) => x ** 2;
console.log('------------------');
function logSong(song) {
    if (!song) {
        return; // OK!  return undefined; 도 OK!
    }
    console.log(`${song}`);
    return true;
}
const test2 = () => 11; // OK!
console.log('------------------');
let songLogger;
songLogger = song => {
    console.log(`${song}`);
    return true; // OK
};
// const bb = void(console.log('xxx'))
const b = songLogger('HeartBeat'); // OK
// 구현부
function mul(a, b, c) {
    if (typeof c === 'number')
        return a * b * c;
    return a * b * 1000;
}
console.log(mul(1, 2)); // 마치 다른 함수인 것 처럼
console.log(mul(1, 2, 3));
function fff() {
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
const kUser = { id: 1, nick: 'aaa', age: 12 };
class Dog {
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
const ix2 = {
    id: 1,
    getId() {
        return this.id;
    },
};
const ix3 = {
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
function frest(...args) {
    console.log('XXXX=', args.length);
}
function frest2(a, b, c) {
    console.log('XXXX2=', a, b, c);
}
function frest3({ id, name }) {
    console.log(id, name);
}
frest3({ id: 1, name: 'Hong' });
frest('a', 'b', 1);
frest2('a', 'b', 1);
const arr1 = ['a', 'b', 1];
frest(...arr1); // frest('a', 'b', 1);
let arr2 = [1, 2, 3];
arr2 = [1, 2, 3];
let tuple1;
tuple1 = [2, 'a', false, 'Seoul'];
function tf(id, name, didOut, addr) {
    console.log(arguments);
}
tf(1, 'a', false, 'Seoul');
function tf2(params) {
    console.log(params);
}
tf2([1, 'a', false, 'Seoul']);
tf2(tuple1); // Key Point!!
// const { v4 } = require('uuid');
// import { v4 } from '@types/uuid';
const uuid_1 = require("uuid");
console.log((0, uuid_1.v4)());
console.log((0, uuid_1.v4)());
const Subjects = ['A', 'B', 'C']; // assertion
var Ss;
(function (Ss) {
    Ss[Ss["\uAD6D\uC5B4"] = 0] = "\uAD6D\uC5B4";
    Ss[Ss["\uC601\uC5B4"] = 1] = "\uC601\uC5B4";
    Ss[Ss["\uC218\uD559"] = 2] = "\uC218\uD559";
})(Ss || (Ss = {}));
const sub = Ss.국어;
const sub2 = Ss.수학;
if (sub === Ss.국어) {
}
const arr3 = [1, 2, 3];
const sub3 = { id: 'A' };
const ta1 = ['aaa', 111];
const tb1 = [true, ta1];
console.log('🚀  tb1:', tb1);
const tb2 = [true, ...ta1];
console.log('🚀  tb2:', tb2);
const cc = [false, [1, 2, 'a']];
const SIZE = [
    { id: 'XS', price: 8000 },
    { id: 'S', price: 10000 },
    { id: 'M', price: 12000 },
    { id: 'L', price: 14000 },
    { id: 'XL', price: 15000 },
];
const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
const totalPrice = SIZE.reduce((currPrice, size) => currPrice + sizeOption[size.id] * size.price, 0);
function read(page) {
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
const counts = {};
counts.apple = 3;
counts.banana = 5;
const is = {
    0: 'hello', // '0': 'hello'
    // name: 'hong',
    age: 26,
};
