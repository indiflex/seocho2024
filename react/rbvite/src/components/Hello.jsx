import { useEffect } from "react";

export default function Hello(props) {
  // console.log("Heeeeeeeeelo!!");

  useEffect(() => {
    // console.log("Hello - useEffect!!");
  }, []);

  return (
    <h1
      onClick={props.plusCount}
      style={{
        cursor: "pointer",
      }}
    >
      Hello, {props.name}!{" "}
      <small className="font-sm text-red-500">({props.age + 1})</small>
    </h1>
  );
}
