const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

const fx = f2(Math.max);
fx(1, 3, 5, 7);

function samef2(f) {
  return function (...args) {
    console.log(f.name, f(...args));
  };
}

console.log("---------------");
const fns = [Math.max, Math.min, parseInt];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

/*
function samef2(f, ...args) {
  return function (...args) {
    console.log('samef2>>', f.name, f(...args));
  };
}
samef2(Math.max, 1, 3, 5)();
*/

const af1 = function (...args) {
  console.log(f.name, f(...args));
};
const af2 = (...args) => console.log(f.name, f(...args));

const f22 = function (f) {
  return af2;
};

// currying
const f = (restrant) => () => {};

// const af = () => { };
function af() {}

const ffx = () => af;

function ff() {
  let count = 0;
  console.log(count, x);
  var x = 2;
  return function () {
    return ++count;
  };
}
ff();

console.log("=========");

const arr = [1, 2, 3, 4, 5];
// const arr = new Array(1, 2, 3, 4, 5);
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log(arr.first(), arr.last());

const arr2 = ["1", "2", "3"];
const ret2 = arr2.map(Number);
console.log("🚀>>  ret2:", ret2);

Array.prototype.mapX = function (f) {
  const rets = [];
  for (let i = 0; i < this.length; i++) {
    // rets.push(f(this[i], i, this));
    rets.push(f(this[i]));
  }
  return rets;
};
const ret3 = arr2.mapX(Number);
console.log("🚀>>  ret3:", ret3);
const ret4 = arr2.mapX(parseInt);
console.log("🚀>>  ret4:", ret4);

console.log(Number.length);
console.log(parseInt.length);

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

const rets2 = arr2.map(parseInt);
// const rets2 = arr2.map(unary(parseInt));
console.log(rets2); // [ 1, 2, 3 ]
