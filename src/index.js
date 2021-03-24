import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./components/UI/Button";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button size="small">Button</Button>
  </React.StrictMode>,
  document.getElementById("root")
);
