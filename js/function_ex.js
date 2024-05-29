// p.134
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// const getNextWeekClosure = () => {
const getNextWeek = (() => {
  let widx = 0;
  return function () {
    // widx += 1; // side-effect!
    // if (widx >= weeks.length) widx = 0;
    return `${weeks[widx++ % 7]}요일`;
  };
})();

// const getNextWeek = getNextWeekClosure();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect! (이 것을 못 하도록!)
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 200);
