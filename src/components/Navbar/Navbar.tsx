import "./Navbar.css";
import { Spin } from "../index";
import { useHistory } from "react-router";

export const Navbar = () => {
  const history = useHistory();

  return (
    <div id="navbar">
      <Spin />
      <ul className="links">
        <li onClick={() => history.push("/")}>Home</li>
        <li>Projects</li>
        <li onClick={() => history.push("/about")}>About</li>
      </ul>
      <ul className="profile">
        <li>image</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
