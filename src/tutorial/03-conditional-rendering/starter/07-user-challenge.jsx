import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const login = (name) => {
    setUser({ name: name });
  };

  const logout = () => {
    setUser(null);
    setInputValue("");
  };

  return (
    <div>
      {user ? <h4>hello there, {user.name}</h4> : <h4>please login</h4>}
      {!user && (
        <>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <br />
        </>
      )}
      {user ? (
        <button className="btn" onClick={() => logout()}>
          logout
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            if (!inputValue) {
              alert("please type your name");
              return;
            }
            login(inputValue);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default UserChallenge;
