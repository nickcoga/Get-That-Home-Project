import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
// import FormProperty from "./components/FormProperty/FormProperty";
import LandPage from "./pages/LandPage";
import Signup from "./pages/Signup";
import ListProperties from "./pages/ListProperties";
import SavedProperties from "./pages/SavedProperties";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={LandPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/listproperties" component={ListProperties} />
          <Route path="/saveproperties" component={SavedProperties} />
        </div>
      </Router>
      {/* <FormProperty /> */}
    </div>
  );
}

export default App;
