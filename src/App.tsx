import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
