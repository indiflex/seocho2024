const assert = require('assert');

// 1) 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map(a => a.toString());
console.log('🚀>>  ret1:', ret1);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// const classNames = (...args) => args.join(' '); // 공백 문제!
const classNames = (...args) => args.filter(a => !!a.trim()).join(' ');
// ['', 'a b  c ', 'd', ' ', 'e'].filter
const ret2 = classNames('', 'a b c', 'd', ' ', 'e');
console.log('🚀>>  ret2:', ret2);
assert.strictEqual(ret2, 'a b c d e');

// args: ['', ' a b  c ', ' d', ' ', 'e ']
function classNames2(...args) {
  return args
    .join(' ') // '  a b  c  d  e '
    .split(' ') // ['a', 'b', '', 'c',  'd', '', 'e']
    .filter(a => !!a) // ['a', 'b', 'c', 'd', 'e']
    .join(' '); // 'a b c d e'
}
const ret3 = classNames2('', ' a b  c ', ' d', ' ', 'e ');
console.log('🚀>>  ret3:', ret3);
assert.strictEqual(ret3, 'a b c d e');
