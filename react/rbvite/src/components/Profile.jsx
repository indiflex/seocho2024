
export default function Profile({name, signOut}) {
  return <>
    <strong className='text-green-500'>{name}</strong> logined
    <button onClick={signOut} className='ml-3 py-0 px-1 text-sm'>SignOut</button>
  </>
}