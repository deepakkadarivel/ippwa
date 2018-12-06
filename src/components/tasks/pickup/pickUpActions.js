import 'whatwg-fetch'
import axios from 'axios';
import pickUpActionTypes from './pickUpActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";
import {selectPickUp, selectPickUpApprovalResponse} from "./pickUpSelector";
import {setToast} from "../../home/homeActions";

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

const updatePickUpPending = () => {
  return {
    type: pickUpActionTypes.UPDATE_PICK_UP.pending
  };
};

const updatePickUpFulfilled = () => {
  return {
    type: pickUpActionTypes.UPDATE_PICK_UP.fulfilled
  };
};

const updatePickUpRejected = () => {
  return {
    type: pickUpActionTypes.UPDATE_PICK_UP.rejected
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

const setPickUpApprovalResponse = pickUp => {
  return {
    type: pickUpActionTypes.SET_PICK_UP_APPROVAL_RESPONSE,
    pickUp,
  };
};

const updateFieldValue = item => {
  return (dispatch, getState) => {
    const pickUp = selectPickUp(getState());
    dispatch({
      type: pickUpActionTypes.UPDATE_PICK_UP_HEADER_FIELD_VALUE,
      item,
      pickUp,
    });
  };
};

const handleLineItemChange = item => {
  return (dispatch, getState) => {
    const pickUp = selectPickUp(getState());
    dispatch({
      type: pickUpActionTypes.UPDATE_PICK_UP_LINE_FIELD_VALUE,
      item,
      pickUp,
    });
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
        const pickUpApprovalResponse = selectPickUpApprovalResponse(getState());
        dispatch(setToast({
          variant: constants.TOAST.VARIANTS.SUCCESS,
          message: pickUpApprovalResponse.actionMsg ? pickUpApprovalResponse.actionMsg : 'PickUp Updated successfully',
          isOpen: true
        }));
      })
      .catch((err) => {
        dispatch(pickUpRejected());
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

const updatePickUp = (pickUp, comments, submitType, history) => {
  return (dispatch, getState) => {
    const updatePickUpUrl = apiService.endpoints.app.generateUpdatePickUpUrl();
    dispatch(updatePickUpPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        pickUpItemId: pickUp.pickUpItemId,
        assetId: pickUp.assetId,
        workflowAuditId: pickUp.workflowAuditId,
        taskId: pickUp.taskId,
        seqFlow: pickUp.seqFlow,
        auditTrackId: pickUp.auditTrackId,
        processInstanceId: pickUp.processInstanceId,
        pickUpItemRequestNo: pickUp.pickUpItemRequestNo,
        workflowId: pickUp.workflowId,
        wareHouse: pickUp.wareHouse,
        submitType,
        needDate: pickUp.needDate,
        returnDate: pickUp.returnDate,
        companyId: pickUp.companyId || 0,
        userId: parseInt(getValue(constants.LOCAL_STORAGE.USER_ID)) || constants.EMPTY_STRING,
        apiType: constants.API_TYPES.UPDATE_PICK_UP_TYPE_API,
        comments,
        dynamicColumns: pickUp.dynamicColumns,
        itemJsonString: JSON.stringify(pickUp.pickUpLineItems),
        entityId: pickUp.entityId,
        entityName: pickUp.entityName,
        viewId: pickUp.viewId,
        viewName: pickUp.viewName,
        requesterId: pickUp.requesterId
      }
    };

    return axios
      .post(updatePickUpUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setPickUpApprovalResponse(response.data));
        history.goBack();
        dispatch(updatePickUpFulfilled());
        const pickUpApprovalResponse = selectPickUpApprovalResponse(getState());
        dispatch(setToast({
          variant: constants.TOAST.VARIANTS.SUCCESS,
          message: pickUpApprovalResponse.actionMsg ? pickUpApprovalResponse.actionMsg : 'PickUp Updated successfully',
          isOpen: true
        }));
      })
      .catch(err => {
        dispatch(updatePickUpRejected());
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

export {getPickUp, updateFieldValue, handleLineItemChange, updatePickUp};