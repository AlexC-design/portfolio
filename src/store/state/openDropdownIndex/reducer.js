import { SET_OPEN_DROPDOWN_INDEX } from "./index";

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_DROPDOWN_INDEX:
      return action.payload;
    default:
      return state;
  }
};
