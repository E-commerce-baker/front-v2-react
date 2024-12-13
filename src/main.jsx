import React from "react";
import ReactDOM from "react-dom/client";
// import Test from "./Test";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./APP/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Test /> */}
  </React.StrictMode>
);
