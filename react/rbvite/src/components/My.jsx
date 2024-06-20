export default function My({session: {loginUser, cart}, signOut}) {
  return <>
    <strong className='text-green-500'>{loginUser?.name}</strong> logined
    <button onClick={signOut} className='ml-3'>SignOut</button>
    <div className="border">
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