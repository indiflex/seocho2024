import moment from 'moment';

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const LOCALE_MAPPER = {
  korea: 'ko',
  japan: 'ja',
  english: 'en',
};

export function fromNow(dt, locale = 'korea') {
  const localCode =
    locale?.length < 3
      ? locale.toLocaleLowerCase()
      : LOCALE_MAPPER[locale.toLowerCase()];
  moment.locale(localCode);
  return moment(dt).fromNow();
}

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

// console.log('***>>', fromNow(new Date()));
// console.log('***>>', fromNow(new Date(), 'JAPAN'));
// console.log('***>>', fromNow(new Date(), 'koREa'));
// console.log('***>>', fromNow(new Date(), 'jaPan'));
// console.log('***>>', fromNow(new Date(), 'english'));
// console.log('***>>', fromNow(new Date(), 'ko'));
// console.log('***>>', fromNow(new Date(), 'ja'));
// console.log('***>>', fromNow(new Date(), 'JA'));

// console.log([1, 2, 3].first());
// console.log([1, 2, 3].last());
