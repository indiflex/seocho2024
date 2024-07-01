type Params = {
  params: {
    time: string;
  };
};

// afternoon ==> Afternoon
const toUpperFirstChar = (s: string) => `${s[0].toUpperCase()}${s.slice(1)}`;

export default function Time({ params }: Params) {
  const { time } = params;
  return <h3 className='text-3xl'>Good {toUpperFirstChar(time)}!</h3>;
}
