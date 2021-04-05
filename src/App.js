// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import LandPage from "./pages/LandPage";
// import Signup from "./pages/Signup";
// import ListProperties from "./pages/ListProperties";
// import SavedProperties from "./pages/SavedProperties";
// import PropertyForm from "./pages/PropertyForm";
// import PropertyDetail from "./pages/PropertyDetail";
import FormProperty from "./components/FormProperty/FormProperty";
// import Maps from "./components/Maps/Maps";
// import SearchLocationInput from "./components/InputPlace/InputPlacesAutocomplete";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={LandPage} />
    //     <Route path="/signup" component={Signup} />
    //     <Route path="/listproperties" component={ListProperties} />
    //     <Route path="/saveproperties" component={SavedProperties} />
    //     <Route path="/propertyform" component={PropertyForm} />
    //     <Route path="/propertydetail" component={PropertyDetail} />
    //   </Switch>
    // </Router>
    <FormProperty />
  );

  {
    /* <SearchLocationInput onChange={() => null} /> */
  }
  {
    /* <Maps /> */
  }
}

export default App;
