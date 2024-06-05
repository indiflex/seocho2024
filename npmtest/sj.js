import { rand, fromNow } from "seochojade";

console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));
console.log(rand(1, 5));

console.log("fromNow=", fromNow(new Date()));
console.log("fromNow=", fromNow(new Date(), "english"));

const arr = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김길동" },
];
console.log(arr.first());
console.log(arr.last());
