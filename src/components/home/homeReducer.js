import homeInitialState from "./homeInitialState";
import homeActionTypes from "./homeActionTypes";

const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case homeActionTypes.SET_TOAST:
      return state.set('toast', action.toast);
    default:
      return state;
  }
};

export default homeReducer;