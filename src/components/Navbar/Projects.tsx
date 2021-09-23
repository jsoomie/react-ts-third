import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDetectOutsideClick } from "./OutsideClick";

export const Projects = () => {
  const history = useHistory();
  const dropDownRef = useRef<HTMLLIElement>(null);

  const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

  const handelDropDownClick = (): void => {
    setIsActive(!isActive);
  };

  const refresh = (path: string): void => {
    history.push(path);
    setIsActive(dropDownRef, false);
  };

  const Stage = () => (
    <li className="dropDownContainer">
      <div onClick={handelDropDownClick} className="dropdown-trigger">
        Projects
      </div>
      <nav
        id="dropdown"
        className={isActive ? "active" : "inactive"}
        ref={dropDownRef}
      >
        <ul>
          <li onClick={() => refresh("/clickercounter")}>Clicker Counter</li>
          <li onClick={() => refresh("/spinner")}>Spinner</li>
          <li onClick={() => refresh("/about")}>Testing</li>
        </ul>
      </nav>
    </li>
  );
  return <Stage />;
};

export default Projects;
