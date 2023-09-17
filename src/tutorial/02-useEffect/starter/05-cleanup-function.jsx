import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setIsOn(!isOn)}>
        toggle
      </button>
      {isOn && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   console.log("cleanup function executed");
    //   clearInterval(intervalId);
    // };

    const scrollFunc = () => {
      console.log("you are scrolling");
    };

    window.addEventListener("click", scrollFunc);
    return () => window.removeEventListener("click", scrollFunc);
  }, []);

  return <h2>simple return</h2>;
};

export default CleanupFunction;
