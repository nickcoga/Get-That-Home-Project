import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./components/UI/Button";
import Inputs from "./components/UI/Inputs";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button size="small">Button</Button>
    <Inputs />
  </React.StrictMode>,
  document.getElementById("root")
);
