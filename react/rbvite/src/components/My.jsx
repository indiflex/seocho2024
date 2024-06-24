import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";

export default function My({ session: { loginUser, cart }, signOut }) {
  return (
    <>
      {loginUser ? (
        <Profile name={loginUser?.name} signOut={signOut} />
      ) : (
        <Login />
      )}

      <div className="mt-5 border">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <small className="ml-2 p-3 pl-2 pr-2 text-gray-300">
                ({item.price.toLocaleString()}원)
              </small>
            </li>
          ))}
        </ul>
        <Button text="상품추가" />
      </div>
    </>
  );
}
