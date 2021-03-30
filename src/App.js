import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/signup" component={Random} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Signup} />
        </div>
      </Router>
    </div>
  );
}

export default App;
