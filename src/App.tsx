import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { projectList } from "./data/projectList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {projectList.length ? (
            projectList.map(({ id, path, component }) => (
              <Route exact path={path} component={component} key={id} />
            ))
          ) : (
            <h1>No Pages Currently Accessible</h1>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
