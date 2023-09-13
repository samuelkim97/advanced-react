import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeAll = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
              style={{ marginBottom: "1rem" }}
            >
              remove item
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={removeAll}
        style={{ marginTop: "1rem" }}
      >
        clear all items
      </button>
    </>
  );
};

export default UseStateArray;
