import { useRef, useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import SampleAtoms from "./atoms/SampleAtoms";
import Input from "./atoms/Input";

export default function My({
  session: { loginUser, cart },
  signOut,
  signIn,
  removeItem,
  addItem: addCartItem,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const itemNameRef = useRef();
  const itemPriceRef = useRef();

  const cancelAdding = (evt) => {
    evt.preventDefault();
    setIsAdding(false);
  };

  const addItem = (evt) => {
    evt.preventDefault();
    const itemName = itemNameRef.current.value;
    const itemPrice = itemPriceRef.current.value;
    console.log("🚀  itemName, itemPrice:", itemName, itemPrice);
    if (!itemName || !itemPrice) {
      alert("상품명과 금액을 정확히 입력하세요!");
      itemNameRef.current.focus();
      return;
    }
    addCartItem(itemName, +itemPrice);
    setIsAdding(false);
  };

  return (
    <>
      {loginUser ? (
        <Profile name={loginUser?.name} signOut={signOut} />
      ) : (
        <Login singIn={signIn} />
      )}

      <div className="my-5 border text-center">
        <ul>
          {cart?.length
            ? cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b">
                  <span className="text-xs text-gray-300">{item.id}</span>
                  <strong>
                    {item.name}
                    <small className="ml-2 text-gray-500">
                      ({item.price.toLocaleString()}원)
                    </small>
                  </strong>
                  <Button
                    onClick={() => removeItem(item.id)}
                    type="danger"
                    text="X"
                    size="xs"
                  />
                </li>
              ))
            : "장바구니가 비었습니다."}
        </ul>
        {isAdding ? (
          <form className="m-2 flex gap-3 border border-green-300 p-3">
            <Input ref={itemNameRef} placeholder="상품명" />
            <Input ref={itemPriceRef} type="number" placeholder="금액" />
            <Button text="Cancel" onClick={cancelAdding} size="sm" />
            <Button text="Add" onClick={addItem} type="primary" size="sm" />
          </form>
        ) : (
          <Button
            onClick={() => setIsAdding(true)}
            text="+ 상품추가"
            className="mt-5"
          />
        )}
      </div>

      <SampleAtoms />
    </>
  );
}
