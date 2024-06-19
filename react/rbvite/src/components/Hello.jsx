
export default function Hello(props) {
  return <h1 onClick={props.plusCount} style={{
  cursor: 'pointer'
}}>Hello, {props.name}! <small className="font-sm">({props.age})</small></h1>
}
