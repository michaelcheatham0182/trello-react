import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./containers/App";
//import registerServiceWorker from "./registerServiceWorker";
import store from "./stores/";
import { saveItems } from "./localStorage";

store.subscribe(() => {
  saveItems(store.getState({
    items: store.getState().data.items
  }));
});

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"));

//registerServiceWorker();
