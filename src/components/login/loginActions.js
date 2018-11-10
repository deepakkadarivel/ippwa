import 'whatwg-fetch'
import axios from 'axios';
import loginActionTypes from './loginActionTypes';
import apiService from '../../shared/service/apiService';
import constants from '../../shared/constants';

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

const setErrorMessage = message => {
  return {
    type: loginActionTypes.SET_ERROR_MESSAGE,
    message,
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
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(loginFulfilled());
        console.log(response);
      })
      .catch((error) => {
        dispatch(loginRejected());
        dispatch(setErrorMessage(error.response ? error.response.data.message : constants.SERVER_UNAVAILABLE));
      });
  };
};

export {login};