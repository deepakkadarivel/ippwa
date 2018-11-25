import 'whatwg-fetch'
import axios from 'axios';
import pickUpActionTypes from './pickUpActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";

const pickUpPending = () => {
  return {
    type: pickUpActionTypes.PICK_UP.pending
  };
};

const pickUpFulfilled = () => {
  return {
    type: pickUpActionTypes.PICK_UP.fulfilled
  };
};

const pickUpRejected = () => {
  return {
    type: pickUpActionTypes.PICK_UP.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: pickUpActionTypes.SET_ERROR_MESSAGE,
    message,
  };
};

const setPickUp = pickUp => {
  return {
    type: pickUpActionTypes.SET_PICK_UP,
    pickUp,
  };
};

const getPickUp = task => {
  return (dispatch, getState) => {
    const pickUpUrl = apiService.endpoints.app.generatePickUpUrl();
    dispatch(pickUpPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        id: task.pickUpRequestId,
        companyId: task.companyId,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        loggedInSupplierId: task.supplierId,
        apiType: constants.API_TYPES.APPROVE_PICK_UP_TYPE_API,
      },
    };

    return axios
      .post(pickUpUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setPickUp(response.data));
        dispatch(pickUpFulfilled());
      })
      .catch((err) => {
        dispatch(pickUpRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE));
        }
      });
  };
};

export {getPickUp};