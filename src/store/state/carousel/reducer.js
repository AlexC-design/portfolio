import { SET_FULL_SCREEN_ON, SET_FULL_SCREEN_OFF } from "./index";

const initialState = {
  fullScreen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_SCREEN_ON:
      return {
        ...state,
        fullScreen: true
      };
    case SET_FULL_SCREEN_OFF:
      return {
        ...state,
        fullScreen: false
      };

    default:
      return state;
  }
};
