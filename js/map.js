const map1 = new Map();
map1.set('A', 65);
map1.set('B', 66);
map1.set('A', 68);
map1.delete('B');
map1.clear();
console.log('🚀>>  map1:', map1, map1.size);
console.log('🚀>>  map1-keys:', [...map1.keys()]);
console.log('🚀>>  map1-values:', [...map1.values()]);
console.log('---->', map1.has('A'));
console.log('---->', map1.has('C'));

const map2 = new Map([
  [1, 11],
  [2, 22],
]);
console.log('🚀>>  map2:', map2);
console.log('🚀>>  map2-keys:', [...map2.keys()]);

console.log('==================');
const s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(2);
console.log('🚀>>  s1:', s1);

const s2 = new Set([1, 2, 1, 2, 3, 5, 5, 3]);
console.log('🚀>>  s2:', s2);

// ex) [1, 2, 1, 2, 3, 5] 중복하세요.
const arr = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr);
console.log('🚀>>  s3:', s3);
// const ret = s3.values(); // iterator
const ret = [...s3];
console.log('🚀>>  ret:', ret);

console.log('정답>>', [...new Set(arr)]);
