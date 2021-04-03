import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
// import FormProperty from "./components/FormProperty/FormProperty";
import LandPage from "./pages/LandPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={LandPage} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
      {/* <FormProperty /> */}
    </div>
  );
}

export default App;
