import 'whatwg-fetch';
import axios from 'axios';
import loginActionTypes from './loginActionTypes';
import apiService from '../../shared/service/apiService';
import history from '../../shared/service/history';
import constants from '../../shared/constants';
import {setToast} from "../home/homeActions";

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
    message
  };
};

const setAuth = auth => {
  return {
    type: loginActionTypes.SET_AUTH,
    auth
  };
};

const login = (userName, password) => {
  return (dispatch, getState) => {
    const loginUrl = apiService.endpoints.app.generateLoginUrl();
    dispatch(loginPending());

    let payload = {
      userName,
      password
    };

    return axios
      .post(loginUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(loginFulfilled());
        dispatch(setAuth(response.data));
        localStorage.setItem('entityList', JSON.stringify(response.data.entityList));
        localStorage.setItem('currencies', JSON.stringify(response.data.user.orgUserMapping[0].orgCurrency));
        history.push('/home');
      })
      .catch(error => {
        const msg = error.response ? error.response.data.message : constants.SERVER_UNAVAILABLE;
        dispatch(loginRejected());
        dispatch(
          setErrorMessage(msg)
        );
      });
  };
};

export { login };
