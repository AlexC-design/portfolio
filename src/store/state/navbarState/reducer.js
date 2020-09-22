import { SET_NAVBAR_SMALL_ON, SET_NAVBAR_SMALL_OFF } from "./index";

const initialState = {
  navbarSmall: false
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

    default:
      return state;
  }
};
