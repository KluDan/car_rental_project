import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GlobalStyles } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car_rental_project">
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
