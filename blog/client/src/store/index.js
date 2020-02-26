import { createStore, applyMiddleware } from "redux";
import penderMiddleware from "redux-pender";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middleware = [penderMiddleware()];

const composerEnhancers = (middlewares) => (process.env.NODE_ENV !== "prod" ? composeWithDevTools(middlewares) : middlewares);

const store = createStore(
  reducers,
  {},
  composerEnhancers(applyMiddleware(...middleware)),
);

export default store;
