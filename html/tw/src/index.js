const ARR = [1, 2, 3, 4, 5];
const FN = {
  square: n => n ** 2,
  sqrt: n => Math.sqrt(n),
  cube: n => n ** 3,
};

const fns = [];
const $fngrp = document.getElementById('fn-group');

function appendFn(f) {
  console.log('arguments=', arguments);
  fns.push(FN[f]);
  const p = document.createElement('p');
  p.innerText = f;
  $fngrp.appendChild(p);
  console.log('🚀  fns:', fns);
}

function run() {
  const ret = fns.reduce((acc, f) => acc.map(v => f(v)), ARR);
  document.getElementById('result').innerText = ret;
}

function cancel() {
  fns.length = 0;
  $fngrp.innerHTML = '';
}

// end of fns...

// alert('JS')
// console.log('this=', this);
const $inp = document.getElementById('inp');
// console.log($inp.value);
const $h3 = document.getElementsByTagName('h3')[0];
// console.log('🚀  h3:', $h3);

const $p = document.createElement('p');
$p.innerHTML = '<b>PPP</b>';
$p.style = 'font-size: 10px; color: green;';

$h3.appendChild($p);

// event listener...
const $btn = document.getElementsByClassName('btn')[0];
if ($btn) {
  $btn.addEventListener('click', function (evt) {
    evt.stopPropagation();
    this.innerText = this.innerText === 'TTT' ? 'BTN' : 'TTT';
  });
}

const $btnGroup = document.getElementsByClassName('btn-group')[0];
$btnGroup?.addEventListener(
  'click',
  evt => {
    console.log('aaaaaaaaaaa');
  },
  true // capturing
);

function submitForm(evt) {
  evt.preventDefault();
  console.log('Submit!!!', evt);
}
