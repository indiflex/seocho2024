import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import SampleAtoms from "./atoms/SampleAtoms";

export default function My({
  session: { loginUser, cart },
  signOut,
  signIn,
  removeItem,
}) {
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
                <li key={item.id} className="flex justify-around border-b">
                  <strong>
                    {item.name}
                    <small className="ml-2 text-gray-300">
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
        <Button text="+ 상품추가" className="mt-5" />
      </div>

      <SampleAtoms />
    </>
  );
}
