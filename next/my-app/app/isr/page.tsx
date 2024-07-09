export const revalidate = 30 * 60;

export default function ISR() {
  return (
    <>
      <h1 className='text-2xl'>ISR</h1>
      <p>{Math.random()}</p>
      <p>{new Date().toString()}</p>
    </>
  );
}
