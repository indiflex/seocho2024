type Params = {
  params: {
    time: 'morning' | 'afternoon' | 'evening';
    cmt: string;
  };
};
export default function TimeCmt({ params }: Params) {
  const { time, cmt } = params;
  return (
    <>
      TimeCmt:
      <strong className='text-blue-500'>
        {time} - {cmt}
      </strong>
    </>
  );
}
