const assert = require('assert');

// assert.equal(1, '1', 'Not Equal!!');
// assert.deepEqual(1, '1', 'Not Equal!!');
// assert.strictEqual(1, '1', 'Not Equal!!');
// assert.deepStrictEqual(1, '1', 'Not Equal!!');

const u1 = { id: 1, addr: { city: 'Seoult' } };
const u2 = { id: 1, addr: { city: 'Seoult' } };
assert.deepEqual(u1, u2);
assert.deepStrictEqual(u1, { id: 1, addr: { city: 'Seoult' } });

function push(array, ...toPushData) {
  return [...array, ...toPushData];
}

const arr1 = [1, 2, 3, 5];
const ret1 = push(arr1, 7, 8);
console.log('🚀>>  ret1:', ret1);

assert.deepStrictEqual(ret1, [1, 2, 3, 5, 7, 8]);
