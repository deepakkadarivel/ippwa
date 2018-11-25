import 'whatwg-fetch'
import axios from 'axios';
import poActionTypes from './poActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";
import {selectPO} from "./poSelector";

const poPending = () => {
  return {
    type: poActionTypes.PO.pending
  };
};

const poFulfilled = () => {
  return {
    type: poActionTypes.PO.fulfilled
  };
};

const poRejected = () => {
  return {
    type: poActionTypes.PO.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: poActionTypes.SET_ERROR_MESSAGE,
    message,
  };
};

const setPO = po => {
  return {
    type: poActionTypes.SET_PO,
    po,
  };
};

const updateFieldValue = item => {
  return (dispatch, getState) => {
    const po = selectPO(getState());
    dispatch({
      type: poActionTypes.UPDATE_PO_HEADER_FIELD_VALUE,
      item,
      po,
    });
  };
};

const getPO = task => {
  return (dispatch, getState) => {
    const poUrl = apiService.endpoints.app.generatePOUrl();
    dispatch(poPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        id: task.poRequestId,
        companyId: task.companyId,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        loggedInSupplierId: constants.EMPTY_STRING,
        apiType: task.poParentId === 0 ? constants.API_TYPES.APPROVE_PO_REQ_TYPE_API : constants.API_TYPES.EDIT_PO_AMENDMENT_TYPE_API,
      },
    };

    return axios
      .post(poUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setPO(response.data));
        dispatch(poFulfilled());
      })
      .catch((err) => {
        dispatch(poRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE));
        }
      });
  };
};

export {getPO, updateFieldValue};