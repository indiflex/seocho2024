export default function Ssg() {
  return (
    <>
      <h1 className='text-2xl'>SSG</h1>
      <p>{Math.random()}</p>
      <p>{new Date().toString()}</p>
    </>
  );
}
