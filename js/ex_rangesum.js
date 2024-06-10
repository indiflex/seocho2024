// const assert = require('assert');
import assert from 'assert';

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

function rangeSum(start = 0, end = arr.length - 1) {
  return arr
    .filter((_, i) => i >= start && i <= end)
    .reduce((acc, v) => acc + v, 0);
}

console.log(rangeSum(1, 3));

// assert.deepStrictEqual(rangeSum(2, 5), 19);
// assert.deepStrictEqual(rangeSum(3, 5), 15);
// assert.deepStrictEqual(rangeSum(1, 4), 14);
// assert.deepStrictEqual(rangeSum(0, 4), 15);
// assert.deepStrictEqual(rangeSum(5, 8), 30);
// assert.deepStrictEqual(rangeSum(6, 8), 22);
// assert.deepStrictEqual(rangeSum(2, 8), 41);
// assert.deepStrictEqual(rangeSum(4, 4), 5);
// assert.deepStrictEqual(rangeSum(5), 30);
// assert.deepStrictEqual(rangeSum(2), 41);
// assert.deepStrictEqual(rangeSum(), 45);
