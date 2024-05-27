function hello() {
  return 'Hello, world!';
}

console.log(hello());

function Dog(name) {
  // console.log(this);
  this.name = name;
}

const maxx = Dog('maxx');
console.log(maxx); // module
console.log(globalThis.name); // module

const lucy = new Dog('Lucy');
console.log('🚀>>  lucy:', lucy);

function printFnReturnValue(fn) {
  console.log('arguments>>', arguments);
  console.log('fn.name=', fn.name, fn());
}

const ret = printFnReturnValue(hello);
console.log('🚀>>  ret:', ret);

function showAge({ age }) {
  console.log('age=', age);
}
const user = { id: 1, age: 33 };
showAge(user);

console.log('=============================');
const f1 = function ff(x, isLast) {
  console.log('x=', x);
  if (isLast) return;
  else ff('efg', true);
};

f1(1); // OK

(function () {
  console.log('iife!!!!');
})();

function hi(name) {
  console.log('Hi~', name || this.name);
}

hi.call({ name: 'Hong' });

const counter = (function () {
  let curr = 0;
  return {
    inc(n) {
      curr += n;
    },
    get curr() {
      return curr;
    },
  };
})();

counter.inc(9);
counter.inc(1);
console.log('🚀>>  counter:', counter.curr);

console.log('============ arrow function');
// function f(x) {  // 1
//   return x + 1;
// }

// const f = function (x) { return x + 1 }; // 2

// const f = x => {
//   return x + 1;
// }; // 3

const f = x => x + 1; // 4

console.log('f(2)=', f(2));
console.log('f(3)=', f(3));

const addTax1 = function (resolve) {
  return function (price) {
    return resolve(price * 1.1);
  };
};

//        ||

const addTax2 = resolve => {
  return price => {
    return resolve(price * 1.1);
  };
};

//        ||

const addTax3 = resolve => price => resolve(price * 1.1);
