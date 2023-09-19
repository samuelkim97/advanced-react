import UserContainer from "./UserContainer";

const NavLinks = (props) => {
  const { user, logout } = props;

  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="http://" target="_blank">
            home
          </a>
        </li>
        <li>
          <a href="http://" target="_blank">
            about
          </a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
