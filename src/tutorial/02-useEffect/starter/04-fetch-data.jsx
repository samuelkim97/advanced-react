import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(url).then((resp) => {
  //     resp.json().then((arr) => {
  //       setUsers(arr);
  //     });
  //   });
  //   console.log(users);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(users);
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
