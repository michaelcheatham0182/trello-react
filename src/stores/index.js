import { createStore } from "redux";

import { getItems } from "../localStorage";
import reducer from "../reducers/";

//const initialState = window.__WML_REDUX_INITIAL_STATE__;

/*
var items = {
  data: {
    items: {
      "TODO" : [{
        text: "Some data"
      }, {
        text: "Some other data going here. Should be some long data"
      }],
      "DOING" : [{
        text: "Some data"
      }, {
        text: "Some other data going here. Should be some long data"
      }],
      "DONE" : [{
        text: "Some data"
      }, {
        text: "Some other data going here. Should be some long data"
      }]
    }
  }
};
*/

const items = getItems();

const store = createStore(
  reducer,
  items,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;