import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import store from "./app/Store";
// import { Provider } from "react-redux";
import { css, Global } from "@emotion/react";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-family: "SF Pro Rounded";
    height: 100vh;
  }
  
  #root {
    width: 100%;
    min-height: 100%;
    border-radius: 20px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Global styles={GlobalStyles} />
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
