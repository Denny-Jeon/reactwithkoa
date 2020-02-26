import { combineReducers } from "redux";
import { penderReducer as pender } from "redux-pender";
import blog from "./blogReducer";


export default combineReducers({
  pender,
  blog,
});
