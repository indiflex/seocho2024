// var moment = require('moment'); // CJS 방식
import moment from 'moment'; // ESM 방식
// import { Cat } from './oop.js';
import Cat, { Dog } from './oop.js';
// const Cat = require('oop.js');

const locale = 'ko';
// moment.locale('ko');
// moment.locale('ja');
// moment.locale('zh-cn');
// moment.locale('us');
moment.locale(locale);

const d = new Date();
console.log('🚀>>  d:', d.toLocaleString());

const m = moment();
console.log('🚀>>  m:', m.format('LLL'));
console.log('🚀>>  m:', m.format('dddd'));
console.log('🚀>>  m:', m.format('YYYY-MM-DD (ddd) hh:mm:ss'));
console.log('🚀>>  m:', m.fromNow());

const writtenDate = moment('2024-04-30');
console.log('🚀>>  writtenDate:', writtenDate.fromNow());

const nabi = new Cat('Nabi');
const lucy = new Dog('Lucy');
