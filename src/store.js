/** @format */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(
  composeWithDevTools(applyMiddleware(...middleware))
);
