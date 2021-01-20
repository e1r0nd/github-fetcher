import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
