import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");

  return (
    <>
      <h2>Falsy &&: {text && "hello world"}</h2>
      <h2>Falsy ||: {text || "hello world"}</h2>
      <h2>Truthy &&: {name && "hello world"}</h2>
      <h2>Truthy ||: {name || "hello world"}</h2>
    </>
  );
};
export default ShortCircuitOverview;
