import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./store";
import { createCustomer } from "./features/customers/customerSlice.js";
import { Provider } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 250 });
store.dispatch(createCustomer("Jiaying Liang", "5318698"));
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
