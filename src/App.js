import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./components/pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
