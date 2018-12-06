import 'whatwg-fetch'
import axios from 'axios';
import invoiceActionTypes from './invoiceActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";
import {selectInvoice, selectInvoiceApprovalResponse} from "./invoiceSelector";
import {setToast} from "../../home/homeActions";

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

const updateInvoicePending = () => {
  return {
    type: invoiceActionTypes.UPDATE_INVOICE.pending
  };
};

const updateInvoiceFulfilled = () => {
  return {
    type: invoiceActionTypes.UPDATE_INVOICE.fulfilled
  };
};

const updateInvoiceRejected = () => {
  return {
    type: invoiceActionTypes.UPDATE_INVOICE.rejected
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

const setInvoiceApprovalResponse = invoice => {
  return {
    type: invoiceActionTypes.SET_INVOICE_APPROVAL_RESPONSE,
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

const updateLineFieldValue = item => {
  return (dispatch, getState) => {
    const invoice = selectInvoice(getState());
    dispatch({
      type: invoiceActionTypes.UPDATE_INVOICE_LINE_FIELD_VALUE,
      item,
      invoice,
    });
  };
};

const updateInvoiceFieldValue = item => {
  return (dispatch, getState) => {
    const invoice = selectInvoice(getState());
    dispatch({
      type: invoiceActionTypes.UPDATE_INVOICE_FIELD_VALUE,
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
        const invoiceApprovalResponse = selectInvoiceApprovalResponse(getState());
        dispatch(setToast({
          variant: constants.TOAST.VARIANTS.SUCCESS,
          message: invoiceApprovalResponse.actionMsg ? invoiceApprovalResponse.actionMsg : 'Invoice Updated successfully',
          isOpen: true
        }));
      })
      .catch((err) => {
        dispatch(invoiceRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          const message = err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE;
          dispatch(setErrorMessage(message));
          dispatch(setToast({
            variant: constants.TOAST.VARIANTS.ERROR,
            message,
            isOpen: true
          }));
        }
      });
  };
};

const updateInvoice = (invoice, comments, submitType, history) => {
  return (dispatch, getState) => {
    const updateInvoiceUrl = apiService.endpoints.app.generateUpdateInvoiceUrl();
    dispatch(updateInvoicePending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        invoiceId: invoice.invoiceId,
        submitType,
        workflowAuditId: invoice.workflowAuditId,
        taskId: invoice.taskId,
        seqFlow: invoice.seqFlow,
        auditTrackId: invoice.auditTrackId,
        processInstanceId: invoice.processInstanceId,
        invoiceNo: invoice.invoiceNo,
        invoiceDate: invoice.invoiceDate,
        workflowId: invoice.workflowId,
        supplierId: invoice.supplierId,
        requisitionId: invoice.requisitionId,
        companyId: invoice.companyId,
        userId: parseInt(getValue(constants.LOCAL_STORAGE.USER_ID)) || constants.EMPTY_STRING,
        apiType: constants.API_TYPES.UPDATE_INVOICE_TYPE_API,
        comments,
        itemJson: JSON.stringify(invoice.invoiceLineItems),
        subTotalAmt: invoice.subTotalAmt,
        additionalAmt: invoice.additionalAmt,
        adjustedAmt: invoice.adjustedAmt,
        discount: invoice.discount,
        grandTotal: invoice.grandTotal,
        entityId: invoice.entityId,
        entityName: invoice.entityName,
        requesterId: invoice.requesterId,
        poFrom: invoice.poFrom,
        paymentDays: invoice.paymentDays,
        creditNotes: invoice.creditNotes,
      }
    };

    console.log(payload);

    return axios
      .post(updateInvoiceUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setInvoiceApprovalResponse(response.data));
        history.goBack();
        dispatch(updateInvoiceFulfilled());
      })
      .catch(err => {
        dispatch(updateInvoiceRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          const message = err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE;
          dispatch(setErrorMessage(message));
          dispatch(setToast({
            variant: constants.TOAST.VARIANTS.ERROR,
            message,
            isOpen: true
          }));
        }
      });
  };
};

export {getInvoice, updateFieldValue, updateLineFieldValue, updateInvoice, updateInvoiceFieldValue};