import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { MemoedLogin } from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import SampleAtoms from "./atoms/SampleAtoms";
import { MemoedItemEdit } from "./ItemEdit";
import { useCount } from "../hooks/counter-context";
import Hello from "./Hello";
import { useSession } from "../hooks/session-context";
import clsx from "clsx";

export default function My() {
  const {
    session: { loginUser, cart },
    saveItem,
    addItem,
    removeItem,
    login,
  } = useSession();

  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const { count } = useCount();

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

  // const editing = (itemId) => {
  //   const item = cart.find((item) => item.id === itemId);
  //   setEditingItem(item);
  //   setPrePrice(item.price);
  // };
  const editing = useCallback(
    (itemId) => {
      console.log("🚀  itemId:", itemId);
      const item = cart.find((item) => item.id === itemId);
      setEditingItem(item);
      setPrePrice(item.price);
    },
    [cart],
  );

  const [totalPriceToggleFlag, setTotalPriceToggleFlag] = useState(false);
  const [prePrice, setPrePrice] = useState(0);
  const totalPrice = useMemo(() => {
    console.warn("tttotalPrice>>", totalPriceToggleFlag);
    return cart?.reduce((acc, item) => acc + item.price, 0);
  }, [cart, totalPriceToggleFlag]);

  const cancelEditing = useCallback(() => {
    setEditingItem(null);
    setPrePrice(0);
  }, []);

  const editItem = useCallback(
    (item) => {
      saveItem(item);
      if (prePrice !== item.price)
        setTotalPriceToggleFlag(!totalPriceToggleFlag);

      // setTotalPriceToggleFlag(prePrice !== item.price);
    },
    [saveItem, prePrice, totalPriceToggleFlag],
  );

  const [isUnder3, setIsUnder] = useState(false);
  useEffect(() => {
    setIsUnder(cart?.length < 3);
  }, [cart]);

  return (
    <>
      {loginUser && (
        <div>
          <Hello name={loginUser.name} age={loginUser.age} />
        </div>
      )}

      {loginUser ? <Profile /> : <MemoedLogin signIn={login} />}

      <h1>
        Second: {time} - {count}
      </h1>

      {/* <div className="my-5 border-2 border-blue-500 border-red-500 text-center"> */}
      <div
        className={clsx("my-5 border-2 text-center", {
          "border-blue-500": !isUnder3,
          "border-red-500": isUnder3,
        })}
      >
        {/* <ul className="border-b-2 border-red-500"> */}
        {/* <ul className={clsx("border-b-2", "border-red-500")}> */}
        <ul
          className={clsx({
            "border-b-2": true,
            "border-red-500": isUnder3,
          })}
        >
          {cart?.length
            ? cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b">
                  {editingItem?.id === item.id ? (
                    <MemoedItemEdit
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
