// 'use strict';
const { a } = require('./object1.js');
console.log('🚀>>  a:', a);
globalThis.name = 'GLOBAL';
this.name = 'MODULE';

let obj = {
  name: 'OBJ',
  f1: function () {
    console.log('f1=', this.name);
  },
  f2: () => {
    console.log('f2=', this.name);
  },
  f3() {
    console.log('f3=', this.name);
  },
};

// const z = Object.getOwnPropertyNames(obj);
// const zz = Object.getOwnPropertyDescriptors(obj);
// console.log('🚀>>  zz:', zz);
// console.log('🚀>>  z:', z);

obj.f1();
obj.f2();
obj.f3();
const nm = obj.name;
console.log('-----------------', nm);

const f11 = obj.f1;
const f22 = obj.f2; // arrow function
const f33 = obj.f3;
f11();
f22();
f33(); // TypeError: Cannot read properties of undefined (reading 'name') in strict mode!

obj.__proto__.f4 = function () {
  console.log('4444444444');
};
const x = Object.getPrototypeOf(obj);
console.log('🚀>>  x:', x);
obj.f4();

class Dog {
  constructor(nm) {
    this.name = nm;
  }
  f1() {
    console.log('Dog.f1🐶', this.name);
  }
}

class Golden extends Dog {}

const maxx = new Golden('Maxx');
maxx.f1();
console.log('====>>>', Dog.prototype.f1 === Golden.prototype.f1);

Dog.prototype.f1();
const lucy = new Dog('Lucy');
lucy.f1();
// console.log('🐶>>  Dog:', Dog.prototype.f1);

function f9() {
  this.x = 'F9NAME';
  console.log('f9>>', f9.name, this.x, new.target);
}

f9();
console.log('globalThis.x>>', globalThis.x);

console.log('===============');
const nine = new f9();
console.log('+++++', nine.x);
