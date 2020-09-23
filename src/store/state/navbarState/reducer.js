import {
  SET_NAVBAR_SMALL_ON,
  SET_NAVBAR_SMALL_OFF,
  SET_NAVBAR_SMALLER_ON,
  SET_NAVBAR_SMALLER_OFF
} from "./index";

const initialState = {
  navbarSmall: false,
  navbarSmaller: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_SMALL_ON:
      return {
        ...state,
        navbarSmall: true
      };
    case SET_NAVBAR_SMALL_OFF:
      return {
        ...state,
        navbarSmall: false
      };
    case SET_NAVBAR_SMALLER_ON:
      return {
        ...state,
        navbarSmaller: true
      };
    case SET_NAVBAR_SMALLER_OFF:
      return {
        ...state,
        navbarSmaller: false
      };

    default:
      return state;
  }
};
