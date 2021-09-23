import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ClickerCounterPage,
  SpinnerPage,
  TSReviewPage,
} from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/clickercounter" component={ClickerCounterPage} />
          <Route exact path="/spinner" component={SpinnerPage} />
          <Route exact path="/tsreview" component={TSReviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
