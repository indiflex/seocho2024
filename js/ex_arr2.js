const assert = require('assert');

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

function addUser(user) {
  return [...users, user];
}
const ret1 = addUser(hong);
console.log('🚀>>  ret1:', ret1);

console.log('==================');
function removeUser(user) {
  return users.filter(u => u.id !== user.id);
}
const ret2 = removeUser(lee);
console.log('🚀>>  ret2:', ret2);
console.log('==================');
function changeUser(before, after) {
  return users.map(u => {
    if (u.id === before.id) return after;
    else return u;
  });
}
const ret3 = changeUser(kim, choi);
console.log('🚀>>  ret3:', ret3);

assert.deepStrictEqual(users, [kim, lee, park]);
