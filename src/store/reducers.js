import { combineReducers } from "redux";
import navbarState from "./state/navbarState/reducer";

const reducers = () =>
  combineReducers({
    navbarState
  });

export default reducers;
