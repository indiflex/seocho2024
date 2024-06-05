// https://jsonplaceholder.typicode.com
// user의 이름을 구하는 함수를 작성하시오.

const URL = 'https://jsonplaceholder.typicode.com';

// async function getUserName() {
const getUserName = async userId => {
  // const res = await fetch(URL + '/users/1');
  const res = await fetch(`${URL}/users/${userId}`);
  // console.log('🚀>>  res:', res);
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve('OK'), 2000);
  });
  const data = await res.json();
  // console.log('🚀>>  data:', data);
  return data?.name;
};

(async function f() {
  console.log('1번 유저명:', await getUserName(1));
})();
