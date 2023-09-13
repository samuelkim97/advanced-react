import React from "react";

const UseStateGotcha = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={increaseCount} className="btn">
        click me!
      </button>
    </>
  );
};

export default UseStateGotcha;
