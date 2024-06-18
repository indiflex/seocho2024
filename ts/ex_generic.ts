type Item = { item: string; price: number };
type ItemPrice<ITEM, STOCK> = {
  [k in keyof ITEM]: k extends 'item' ? keyof STOCK : ITEM[k];
};
// {item: 'X' | 'Y' | 'Z', price: 'X' | 'Y' | 'Z'}
// {item: 'X' | 'Y' | 'Z', price: Item[price]}

// 재고 데이터
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
