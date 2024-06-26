import { useEffect } from "react";
import { useCount } from "../hooks/counter-context";

export default function Hello(props) {
  // console.log("Heeeeeeeeelo!!");
  const { plusCount } = useCount();

  useEffect(() => {
    // console.log("Hello - useEffect!!");
  }, []);

  return (
    <h1
      onClick={plusCount}
      style={{
        cursor: "pointer",
      }}
    >
      Hello, {props.name} !
      <small className="font-sm text-red-500">({props.age + 1})</small>
    </h1>
  );
}
