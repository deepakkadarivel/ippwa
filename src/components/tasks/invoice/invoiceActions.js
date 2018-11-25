import 'whatwg-fetch'
import axios from 'axios';
import invoiceActionTypes from './invoiceActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";
import {selectInvoice} from "./invoiceSelector";

const invoicePending = () => {
  return {
    type: invoiceActionTypes.INVOICE.pending
  };
};

const invoiceFulfilled = () => {
  return {
    type: invoiceActionTypes.INVOICE.fulfilled
  };
};

const invoiceRejected = () => {
  return {
    type: invoiceActionTypes.INVOICE.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: invoiceActionTypes.SET_ERROR_MESSAGE,
    message,
  };
};

const setInvoice = invoice => {
  return {
    type: invoiceActionTypes.SET_INVOICE,
    invoice,
  };
};

const updateFieldValue = item => {
  return (dispatch, getState) => {
    const invoice = selectInvoice(getState());
    dispatch({
      type: invoiceActionTypes.UPDATE_INVOICE_HEADER_FIELD_VALUE,
      item,
      invoice,
    });
  };
};

const getInvoice = task => {
  return (dispatch, getState) => {
    const invoiceUrl = apiService.endpoints.app.generateInvoiceUrl();
    dispatch(invoicePending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        id: task.invoiceRequestId,
        companyId: task.companyId,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        loggedInSupplierId: task.supplierId,
        apiType: constants.API_TYPES.APPROVE_INVOICE_TYPE_API,
      },
    };

    return axios
      .post(invoiceUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setInvoice(response.data));
        dispatch(invoiceFulfilled());
      })
      .catch((err) => {
        dispatch(invoiceRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE));
        }
      });
  };
};

export {getInvoice, updateFieldValue};