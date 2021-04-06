import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/Store";
import { Provider } from "react-redux";
import { css, Global } from "@emotion/react";

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  #root {
    width: 100%;
    min-height: 100%;
    border-radius: 20px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
