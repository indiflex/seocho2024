// alert('JS')
console.log('this=', this);
const $inp = document.getElementById('inp');
console.log($inp.value);
const $h3 = document.getElementsByTagName('h3')[0];
console.log('🚀  h3:', $h3);

const $p = document.createElement('p');
$p.innerHTML = '<b>PPP</b>';
$p.style = 'font-size: 10px; color: green;';

$h3.appendChild($p);
