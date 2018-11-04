import axios from 'axios';
import loginActionTypes from "./loginActionTypes";
import apiService from "../../shared/service/apiService";

const loginPending = () => {
  return {
    type: loginActionTypes.LOGIN.pending
  };
};

const loginFulfilled = () => {
  return {
    type: loginActionTypes.LOGIN.fulfilled
  };
};

const loginRejected = () => {
  return {
    type: loginActionTypes.LOGIN.rejected
  };
};

const login = (userName, password) => {
  return (dispatch, getState) => {
    const loginUrl = apiService.endpoints.app.generateGLoginUrl();
    dispatch(loginPending());

    let payload = {
      userName,
      password,
    };

    return axios
      .post(loginUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(loginFulfilled());
        console.log(response);
      })
      .catch(() => {
        dispatch(loginRejected());
      });
  };
};

export {login};