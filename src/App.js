import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import Properties from "./pages/Properties";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/login" component={Login} />
        <Route path="/properties" component={Properties} />
      </Switch>
    </Router>
  );
}

export default App;
