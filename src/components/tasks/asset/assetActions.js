import 'whatwg-fetch';
import axios from 'axios';
import assetActionTypes from './assetActionTypes';
import apiService from '../../../shared/service/apiService';
import constants from '../../../shared/constants';
import { getValue } from '../../../shared/service/localStorage';
import history from '../../../shared/service/history';
import { selectAsset } from './assetSelector';

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

const updateLineFieldValue = item => {
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
      })
      .catch(err => {
        dispatch(assetRejected());
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

export { getAsset, updateFieldValue, updateLineFieldValue };
