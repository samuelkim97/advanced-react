const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count += 1;
    console.log(count);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">
        click me!
      </button>
    </>
  );
};

export default ErrorExample;
