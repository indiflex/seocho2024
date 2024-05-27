function varFn() {
  var v = 1;
  {
    var v = 2,
      vv = 3;
    console.log(v, vv, xx); // 2, 3
  }
  console.log(v, vv); // 2, 3
} // v는 하나의 공간 (stack)

function letFn() {
  let l = 1;
  {
    let l = 2,
      ll = 3;
    console.log(l, ll); // 2, 3
  }
  console.log(l, ll); // ReferenceError: ll is not defined
}

var xx = 9;
varFn();
letFn();
