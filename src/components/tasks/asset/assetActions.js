import 'whatwg-fetch';
import axios from 'axios';
import assetActionTypes from './assetActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import {getValue} from '../../../shared/service/localStorage';
import history from '../../../shared/service/history';
import {selectAsset, selectAssetApprovalResponse} from './assetSelector';
import {setToast} from "../../home/homeActions";

const assetPending = () => {
  return {
    type: assetActionTypes.ASSET.pending
  };
};

const assetFulfilled = () => {
  return {
    type: assetActionTypes.ASSET.fulfilled
  };
};

const assetRejected = () => {
  return {
    type: assetActionTypes.ASSET.rejected
  };
};

const updateAssetPending = () => {
  return {
    type: assetActionTypes.UPDATE_ASSET.pending
  };
};

const updateAssetFulfilled = () => {
  return {
    type: assetActionTypes.UPDATE_ASSET.fulfilled
  };
};

const updateAssetRejected = () => {
  return {
    type: assetActionTypes.UPDATE_ASSET.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: assetActionTypes.SET_ERROR_MESSAGE,
    message
  };
};

const setAsset = asset => {
  return {
    type: assetActionTypes.SET_ASSET,
    asset
  };
};

const setAssetApprovalResponse = asset => {
  return {
    type: assetActionTypes.SET_ASSET_APPROVAL_RESPONSE,
    asset
  };
};

const updateFieldValue = item => {
  return (dispatch, getState) => {
    const asset = selectAsset(getState());
    dispatch({
      type: assetActionTypes.UPDATE_ASSET_HEADER_FIELD_VALUE,
      item,
      asset
    });
  };
};

const handleLineItemChange = item => {
  return (dispatch, getState) => {
    const asset = selectAsset(getState());
    dispatch({
      type: assetActionTypes.UPDATE_ASSET_LINE_FIELD_VALUE,
      item,
      asset
    });
  };
};

const getAsset = task => {
  return (dispatch, getState) => {
    const assetUrl = apiService.endpoints.app.generateAssetUrl();
    dispatch(assetPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        id: task.assetId,
        companyId: task.companyId,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        loggedInSupplierId: task.supplierId,
        apiType: constants.API_TYPES.APPROVE_ASSET_TYPE_API
      }
    };

    return axios
      .post(assetUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setAsset(response.data));
        dispatch(assetFulfilled());
        const assetApprovalResponse = selectAssetApprovalResponse(getState());
        dispatch(setToast({
          variant: constants.TOAST.VARIANTS.SUCCESS,
          message: assetApprovalResponse.actionMsg ? assetApprovalResponse.actionMsg : 'Asset Updated successfully',
          isOpen: true
        }));
      })
      .catch(err => {
        dispatch(assetRejected());
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

const updateAsset = (asset, comments, submitType, history) => {
  return (dispatch, getState) => {
    const updateAssetUrl = apiService.endpoints.app.generateUpdateAssetUrl();
    dispatch(updateAssetPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        pickUpItemId: asset.pickUpItemId,
        assetId: asset.assetId,
        workflowAuditId: asset.workflowAuditId,
        taskId: asset.taskId,
        seqFlow: asset.seqFlow,
        auditTrackId: asset.auditTrackId,
        processInstanceId: asset.processInstanceId,
        pickUpItemRequestNo: asset.pickUpItemRequestNo,
        workflowId: asset.workflowId,
        wareHouse: asset.wareHouse,
        submitType,
        needDate: asset.needDate,
        returnDate: asset.returnDate,
        companyId: asset.companyId || 0,
        userId: parseInt(getValue(constants.LOCAL_STORAGE.USER_ID)) || constants.EMPTY_STRING,
        apiType: constants.API_TYPES.UPDATE_ASSET_TYPE_API,
        comments,
        dynamicColumns: asset.dynamicColumns,
        itemJsonString: JSON.stringify(asset.assetLineItems),
        entityId: asset.entityId,
        entityName: asset.entityName,
        viewId: asset.viewId,
        viewName: asset.viewName,
        requesterId: asset.requesterId
      }
    };

    return axios
      .post(updateAssetUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setAssetApprovalResponse(response.data));
        history.goBack();
        dispatch(updateAssetFulfilled());
      })
      .catch(err => {
        dispatch(updateAssetRejected());
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

export {getAsset, updateFieldValue, handleLineItemChange, updateAsset};
