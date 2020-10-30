import { combineReducers } from "redux";
import navbarState from "./state/navbarState/reducer";
import carousel from "./state/carousel/reducer";
import openDropdownIndex from "./state/openDropdownIndex/reducer";

const reducers = () =>
  combineReducers({
    navbarState,
    openDropdownIndex,
    carousel
  });

export default reducers;
