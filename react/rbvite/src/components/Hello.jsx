
export default function Hello(props) {
  return <h1 onClick={props.plusCount} style={{
  cursor: 'pointer'
}}>Hello, {props.name}! <small className="font-sm text-red-500">({props.age})</small></h1>
}
