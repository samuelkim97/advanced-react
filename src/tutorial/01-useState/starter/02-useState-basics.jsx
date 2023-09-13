import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        click me
      </button>
    </>
  );
};

export default UseStateBasics;
