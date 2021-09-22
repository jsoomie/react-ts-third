import "./Navbar.css";
import { Spin } from "../index";

export const Navbar = () => {
  return (
    <div id="navbar">
      <Spin />
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Store</li>
        <li>ETC</li>
      </ul>
      <ul className="profile">
        <li>image</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
