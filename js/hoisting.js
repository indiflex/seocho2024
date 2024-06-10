let i;
var x = undefined;
f = undefined;
function ff() {
  console.log('ff>', y, yy);
}
var y = undefined;
var xx = undefined;

console.log(i); // ReferenceError: Cannot access 'i' before initialization
i = 1;
console.log('x=', x); // x= undefined
x = 1;
console.log(ff, f); // [Function: ff], undefined
f(); // TypeError: f is not a function
{
  function f() {
    console.log('f>', x, xx);
  } // 여기서 <f.o> 할당!!
  f(); // 1, undefined (:LexicalScope)
  x = 2;
  b = 1;
}
if (x > 2) {
  // let yy = <unInitializedYet>;
  let yy;
  y = 5;
  yy = 55;
}
xx = 100;
ff(); // ReferenceError: yy is not defined
