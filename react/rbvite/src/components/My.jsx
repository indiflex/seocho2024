import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import SampleAtoms from "./atoms/SampleAtoms";
import ItemEdit, { MemoedItemEdit } from "./ItemEdit";
// import ItemEdit, { MemoedItemEdit } from "./ItemEdit";

export default function My({
  session: { loginUser, cart },
  signOut,
  signIn,
  removeItem,
  addItem,
  saveItem,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const cancelAdding = () => {
    setIsAdding(false);
  };

  // test useEffect
  const [time, setTime] = useState(
    Math.round(new Date().getTime() / 1000) % 1000,
  );

  useEffect(() => {
    const intl = setInterval(() => {
      // console.log("time=", time);
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      // console.log("🚀  intl clear!!");
      clearInterval(intl);
    };
  }, []);

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   // console.log("fetch!!!");
  //   fetch("https://jsonplaceholder.typicode.com/posts?userId=2", signal)
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));

  //   return () => {
  //     // console.log("abort!!");
  //     controller.abort();
  //   };
  // }, []);

  useLayoutEffect(() => {
    // console.debug("useLayoutEffect!!!!!!");
  }, []);

  const addingItem = useMemo(() => ({ name: "", price: 1000 }), []);

  const editing = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    setEditingItem(item);
    setPrePrice(item.price);
  };
  const cancelEditing = () => {
    setEditingItem(null);
    setPrePrice(0);
  };
  const editItem = (item) => {
    saveItem(item);
    if (prePrice !== item.price) setTotalPriceToggleFlag(!totalPriceToggleFlag);
  };

  const [totalPriceToggleFlag, setTotalPriceToggleFlag] = useState(false);
  const [prePrice, setPrePrice] = useState(0);
  const totalPrice = useMemo(() => {
    console.log("tttotalPrice>>", totalPriceToggleFlag);
    return cart?.reduce((acc, item) => acc + item.price, 0);
  }, [cart, totalPriceToggleFlag]);

  return (
    <>
      {loginUser ? (
        <Profile name={loginUser?.name} signOut={signOut} />
      ) : (
        <Login singIn={signIn} />
      )}

      <h1>
        Second: {time} - {prePrice}
      </h1>
      <Button
        text="TotalPrice"
        onClick={() => setTotalPriceToggleFlag(!totalPriceToggleFlag)}
      />

      <div className="my-5 border text-center">
        <ul>
          {cart?.length
            ? cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b">
                  {editingItem?.id === item.id ? (
                    <ItemEdit
                      item={editingItem}
                      cancel={cancelEditing}
                      save={editItem}
                    />
                  ) : (
                    <>
                      <span className="text-xs text-gray-300">{item.id}</span>
                      <strong>
                        {item.name}
                        <small className="ml-2 text-gray-500">
                          ({item.price.toLocaleString()}원)
                        </small>
                      </strong>
                      <div>
                        <Button
                          onClick={() => editing(item.id)}
                          type="primary"
                          text={<FaEdit />}
                          size="xs"
                          className="py-1"
                        />
                        <Button
                          onClick={() => {
                            if (confirm("Are u sure??")) removeItem(item.id);
                          }}
                          type="danger"
                          text={<FaTrashAlt />}
                          size="xs"
                          className="py-1"
                        />
                      </div>
                    </>
                  )}
                </li>
              ))
            : "장바구니가 비었습니다."}
        </ul>
        <h3 className="pl-1 text-left text-green-500">
          * Total: {totalPrice.toLocaleString()}원
        </h3>
        {isAdding ? (
          <MemoedItemEdit
            item={addingItem}
            cancel={cancelAdding}
            save={addItem}
          />
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
