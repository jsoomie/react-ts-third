import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDetectOutsideClick } from "./OutsideClick";
import { projectList } from "../../data/projectList";

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
          {projectList.length ? (
            projectList.map(({ id, title, path }) => (
              <li key={id} onClick={() => refresh(path)}>
                {title}
              </li>
            ))
          ) : (
            <h1>No projects currently available</h1>
          )}
        </ul>
      </nav>
    </li>
  );
  return <Stage />;
};

export default Projects;
