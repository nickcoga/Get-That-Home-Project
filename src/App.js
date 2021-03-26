import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Login from "./pages/Login";
import React from "react";
import NavbarLanding from "./components/UI/NavbarLanding";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Random} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

      <NavbarLanding />
    </div>
  );
}

export default App;
