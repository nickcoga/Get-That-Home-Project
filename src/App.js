// import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
// import SearchLocationInput from "./components/InputPlace/InputPlacesAutocomplete";
import Maps from "./components/Maps/Maps";
// import FormProperty from "./components/FormProperty/FormProperty";
// import LandPage from "./pages/LandPage";
// import Login from "./pages/Login";

function App() {
  return (
    <div>
      {/* <Router>
        <div>
          <Route exact path="/" component={LandPage} />
          <Route path="/login" component={Login} />
        </div>
      </Router> */}
      {/* <FormProperty /> */}
      {/* <SearchLocationInput onChange={() => null} /> */}
      <Maps />
    </div>
  );
}

export default App;
