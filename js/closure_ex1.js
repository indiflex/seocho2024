function discount() {
  const dcRate = 0.1;
  return function (price) {
    return price * dcRate;
  };
}

const items = [
  { item: '상품 A', price: 32000 },
  { item: '상품 B', price: 45000 },
];
const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice); // 실제 판매 금액
  console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}
