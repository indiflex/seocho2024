// import PropTypes from "prop-types";

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
// }

export default function Hello(props) {
  return <h1>Hello, {props.name}! <small className="font-sm">({props.age})</small></h1>
}
