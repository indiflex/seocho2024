import { memo, useEffect, useRef } from "react";
import { FaCartPlus, FaSave, FaUndoAlt } from "react-icons/fa";
import Button from "./atoms/Button";
import Input from "./atoms/Input";

export default function ItemEdit({ cancel, save, item }) {
  const nameRef = useRef();
  const priceRef = useRef();

  // console.log("******************", item);

  const saveItem = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    const name = nameRef.current.value;
    // console.log("🚀  name:", name);
    const price = priceRef.current.value;
    // console.log("🚀  itemName, itemPrice:", name, price);
    if (!name || !price) {
      alert("상품명과 금액을 정확히 입력하세요!");
      nameRef.current.focus();
      return;
    }

    save({ id: item?.id, name, price: +price });
    cancel();
  };

  useEffect(() => {
    if (item) {
      // console.log("🚀  item:", item);
      nameRef.current.value = item.name;
      priceRef.current.value = item.price;
      nameRef.current.select();
    }
  }, [item]);

  return (
    <form className="m-2 flex gap-3 border border-green-300 p-3">
      <Input ref={nameRef} placeholder="상품명" />
      <Input ref={priceRef} type="number" placeholder="금액" />
      <Button text={<FaUndoAlt />} onClick={cancel} size="sm" />
      <Button
        text={item?.id ? <FaSave /> : <FaCartPlus />}
        onClick={saveItem}
        type="primary"
        size="sm"
      />
    </form>
  );
}

// 두 번째 인자(비교함수)가 true를 return 하면 ItemEdit 컴포넌트를 다시 생성하지 않는다.
// 다만 비교함수는 매번 렌더링마다 호출된다!

// export const MemoedItemEdit = memo(ItemEdit, () => true);
// export const MemoedItemEdit = memo(
//   ItemEdit,
//   (a, b) => a.item === b.item,
// );

export const MemoedItemEdit = memo(ItemEdit, ({ item: a }, { item: b }) => {
  // console.log(a, b);
  return a === b;
});
