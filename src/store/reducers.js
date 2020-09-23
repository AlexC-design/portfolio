import { combineReducers } from "redux";
import navbarState from "./state/navbarState/reducer";
import openDropdownIndex from "./state/openDropdownIndex/reducer";

const reducers = () =>
  combineReducers({
    navbarState,
    openDropdownIndex
  });

export default reducers;
