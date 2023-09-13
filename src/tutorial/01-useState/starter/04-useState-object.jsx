import React from "react";

const UseStateObject = () => {
  // const [name, setName] = React.useState("peter");
  // const [age, setAge] = React.useState(24);
  // const [hobby, setHobby] = React.useState("read books");

  const [person, setPerson] = React.useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setName("john");
    // setAge(37);
    // setHobby("fight with people");
    setPerson({ ...person, age: 99 });
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button type="button" className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
