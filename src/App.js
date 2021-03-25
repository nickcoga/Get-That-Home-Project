import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Random} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
