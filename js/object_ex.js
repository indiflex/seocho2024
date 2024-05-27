const arr = [100, 200, 300, 400, 500, 600, 700];

console.log('1. index(key) 출력');
for (const k in arr) {
  console.log(k);
}

console.log('\n2. element(value) 출력');
for (const k in arr) {
  console.log(arr[k]);
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

console.log('\n3. for-in -> obj 이름(키)을 출력');
for (const k in obj) {
  console.log(k);
}

console.log('\n4. for-in -> obj 값을 출력');
for (const k in obj) {
  console.log(obj[k]);
}

console.log('\n5. for-of -> obj 값을 출력', Object.values(obj));
for (const k of Object.values(obj)) {
  console.log(k);
}

Object.defineProperty(obj, 'level', { enumerable: false });
console.log('\n6. level 프로퍼티를 노출금지', Object.entries(obj));

Object.freeze(obj, 'role');
obj.role = 99;
console.log('\n7. role 프로퍼티를 읽기전용', Object.entries(obj));

// p.113
function makeObjectFromArray(arr) {
  // 구현하세요!
}
