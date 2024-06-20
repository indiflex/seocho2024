import Login from "./Login";
import Profile from "./Profile";

export default function My({session: {loginUser, cart}, signOut}) {
  return <>
    {loginUser ? <Profile name={loginUser?.name} signOut={signOut} />
               : <Login />}
    
    <div className="border mt-5">
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name}
            <small className="text-gray-300 ml-2">({item.price.toLocaleString()}원)</small>
          </li>
        ))}
      </ul>
    </div>
  </>;
}