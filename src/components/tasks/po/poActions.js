import 'whatwg-fetch';
import axios from 'axios';
import poActionTypes from './poActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import { getValue } from '../../../shared/service/localStorage';
import history from '../../../shared/service/history';
import { selectPO } from './poSelector';

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

const updatePOPending = () => {
  return {
    type: poActionTypes.UPDATE_PO.pending
  };
};

const updatePOFulfilled = () => {
  return {
    type: poActionTypes.UPDATE_PO.fulfilled
  };
};

const updatePORejected = () => {
  return {
    type: poActionTypes.UPDATE_PO.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: poActionTypes.SET_ERROR_MESSAGE,
    message
  };
};

const setPO = po => {
  return {
    type: poActionTypes.SET_PO,
    po
  };
};

const updateFieldValue = item => {
  return (dispatch, getState) => {
    const po = selectPO(getState());
    dispatch({
      type: poActionTypes.UPDATE_PO_HEADER_FIELD_VALUE,
      item,
      po
    });
  };
};

const handleLineItemChange = item => {
  return (dispatch, getState) => {
    const po = selectPO(getState());
    return dispatch({
      type: poActionTypes.UPDATE_PO_LINE_FIELD_VALUE,
      item,
      po
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
        apiType:
          task.poParentId === 0
            ? constants.API_TYPES.APPROVE_PO_REQ_TYPE_API
            : constants.API_TYPES.EDIT_PO_AMENDMENT_TYPE_API
      }
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
      .catch(err => {
        dispatch(poRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(
            setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE)
          );
        }
      });
  };
};

const updatePO = (po, comments, totalAmount, submitType, history) => {
  return (dispatch, getState) => {
    const updatePOUrl = apiService.endpoints.app.generatePOUrl();
    dispatch(updatePOPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        requisitionNo: po.requisitionNo,
        workflowId: po.workflowId,
        supplierId: po.supplierId,
        currency: po.currency,
        shippingAddressId: po.shippingAddressId,
        billingAddressId: po.billingAddressId,
        purchaseOrder: po.purchaseOrder,
        requisitionId: po.requisitionId,
        workflowAuditId: po.workflowAuditId,
        taskId: po.taskId,
        seqFlow: po.seqFlow,
        auditTrackId: po.auditTrackId,
        processInstanceId: po.processInstanceId,
        submitType: submitType,
        poFrom: po.poFrom,
        totalAmount: totalAmount,
        companyId: po.companyId,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        apiType: po.amendmentEdit ? constants.API_TYPES.UPDATE_PO_AMENDMENT_TYPE_API : constants.API_TYPES.UPDATE_PO_REQ_TYPE_API,
        comments: comments || '',
        dynamicColumns: po.dynamicColumns || '',
        itemJson: JSON.stringify(po.poLineItems),
        terms: po.terms,
        paymentTerms: po.paymentTerms,
        entityId: po.entityId,
        entityName: po.entityName,
        viewId: po.viewId,
        viewName: po.viewName,
        requesterId: po.requesterId,
        parentId: po.parentId,
        poAmendment: po.poAmendment,
        discount: po.discount,
        amendmentEdit: po.amendmentEdit,
        startDate: po.startDate,
        endDate: po.endDate,
        email: po.email,
        isAddressInput: po.isAddressInput,
        isAdvance: po.isAdvance,
        isAdvancePaid: po.isAdvancePaid,
        advancePayment: po.advancePayment,
        deliveryAddress: po.deliveryAddress,
        contactNo: po.contactNo,
        tinNo: po.tinNo,
        vatNo: po.vatNo,
      }
    };

    return axios
      .post(updatePOUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setPO(response.data));
        history.goBack();
      })
      .catch(err => {
        dispatch(updatePORejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(
            setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE)
          );
        }
      });
  };
};

export { getPO, updateFieldValue, handleLineItemChange, updatePO };
