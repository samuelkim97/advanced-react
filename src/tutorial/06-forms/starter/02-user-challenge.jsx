import { useEffect, useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setUser((prevUser) => {
      return [
        ...user,
        {
          id: prevUser.length + 1,
          name,
        },
      ];
    });
    setName("");
  };

  const removeUser = (id) => {
    setUser(() => user.filter((person) => person.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button
          className="btn btn-block"
          style={{ marginTop: "1rem", background: "red" }}
          onClick={() => setUser([])}
        >
          remove all users
        </button>
      </form>
      {/* render users below */}
      <h2>Users :</h2>
      {user.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              style={{ marginBottom: "1rem" }}
              type="button"
              className="btn"
              onClick={() => {
                removeUser(person.id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
