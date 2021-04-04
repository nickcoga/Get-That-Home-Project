import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import LandPage from "./pages/LandPage";
import Signup from "./pages/Signup";
import ListProperties from "./pages/ListProperties";
import SavedProperties from "./pages/SavedProperties";
import PropertyForm from "./pages/PropertyForm";
import PropertyDetail from "./pages/PropertyDetail";
import Maps from "./components/Maps/Maps";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/listproperties" component={ListProperties} />
        <Route path="/saveproperties" component={SavedProperties} />
        <Route path="/propertyform" component={PropertyForm} />
        <Route path="/propertydetail" component={PropertyDetail} />
      </Switch>
    </Router>
  )
}

export default App;
