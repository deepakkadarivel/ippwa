import homeActionTypes from "./homeActionTypes";
import homeInitialState from "./homeInitialState";

const setToast = toast => {
  return {
    type: homeActionTypes.SET_TOAST,
    toast
  };
};

const handleToastClose = () => {
  return (dispatch, getState) => {
    return dispatch(setToast(homeInitialState.toast));
  }
};

export {setToast, handleToastClose};