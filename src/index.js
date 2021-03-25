import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { css, Global } from "@emotion/react";
import { colors } from "./components/styles/ColorStyles";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;
    font-family: "SF Pro Rounded";
    background-color: ${colors.ShallowGray};
    padding: 32px 0;
  }

  .root {
    width: 376px;
    min-height: 100vh;
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
