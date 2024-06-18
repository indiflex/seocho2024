// p.421
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.
const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = 'X' | 'Y' | 'Z';
type T2 = keyof typeof cart;

// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.
const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

// p.422
try {
  // throw new Error('some error!!!!'); // 가
  // throw 'some string error!!!'; // 나
  throw ['some', 'array', 'error']; // 다
} catch (error) {
  // console.log((error as Error).message); // (라)
  if (error instanceof Error) console.log(error.message);
  else console.log(error);
}

type Item = { item: string; price: number };
// { item: string;  price: number}
// type ItemPrice<T, U> = { item: 'X' | 'Y' | 'Z'; price: number };
type ItemPriceX<T, U> = {
  // [k in keyof T]: k extends 'item' ? keyof U : T[k];
  [k in keyof T]: T[k];
  // [k in keyof T]: keyof U;
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);
console.log('🚀  total:', total);
