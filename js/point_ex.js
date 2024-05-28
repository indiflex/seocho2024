function p50() {
  for (let i = 0.1; i < 1; i = i + 0.1) {
    // console.log(Number(i.toFixed(1)));
    console.log(+i.toFixed(1));
  }
}
// p50();

function p51() {
  for (let i = 1; i <= 10; i += 1) {
    const sq = +Math.sqrt(i).toFixed(3);
    // if (sq % 1 !== 0) console.log(i, sq);
    if (sq % 1) console.log(i, sq);
  }
}
// p51();

const WEEK_NAMES = '일월화수목금토';
function p52() {
  const day = new Date().getDay();
  // 간단한 방법
  console.log('🚀>>  day:', WEEK_NAMES[day]);
  let wname;
  switch (day) {
    case 0:
      wname = '일';
      break;
    case 1:
      wname = '월';
      break;
    case 2:
      wname = '화';
      break;
    case 3:
      wname = '수';
      break;
    case 4:
      wname = '목';
      break;
    case 5:
      wname = '금';
      break;
    case 6:
      wname = '토';
      break;
  }
  console.log(`오늘은 ${wname}요일입니다.`);
}
// p52();

// p.53
function getLen(s) {
  return (s ?? '').toString().length;
}
function addPoints(a, b) {
  // let len = getLen(a);
  // if (getLen(b) > len) len = getLen(b);

  // const aLen = getLen(a);
  // const bLen = getLen(b);
  // const len = aLen > bLen ? aLen : bLen;

  const len = Math.max(getLen(a), getLen(b));

  const ret = (a + b).toFixed(len - 2);
  console.log('🚀>>', ret);

  return +ret;
}
console.log(addPoints(0.21354, 0.1) === 0.31354);
console.log(addPoints(0.14, 0.28) === 0.42);
console.log(addPoints(0.34, 0.226) === 0.566);
