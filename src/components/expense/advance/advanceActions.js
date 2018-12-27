import advanceActionTypes from "./advanceActionTypes";
import apiService from "../../../shared/service/apiService";
import axios from "axios";
import history from "../../../shared/service/history";
import constants from "../../../shared/constants";
import {isItemsVisible, selectEntityId, selectViewId} from "./advanceSelector";
import {getValue} from "../../../shared/service/localStorage";
import {setToast} from "../../home/homeActions";

const setValue = (name, value) => {
  return (dispatch, getState) => {
    return dispatch({type: advanceActionTypes.SET_VALUE, name, value});
  }
};

const setEntityDetails = (entityDetails) => {
  return (dispatch, getState) => {
    return dispatch({type: advanceActionTypes.SET_ENTITY_DETAILS, entityDetails});
  }
};

const fetchEntityDetails = () => {
  return (dispatch, getState) => {
    const fetchEntityDetailsUrl = apiService.endpoints.app.generateFetchEntityDetailsUrl();
    const selectedEntityId = selectEntityId(getState());
    dispatch({type: advanceActionTypes.IS_FETCHING_ENTITY_DETAILS, isFetchingEntityDetails: true});

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        entityId: selectedEntityId,
        companyId: getValue(constants.LOCAL_STORAGE.ORG_ID) || constants.EMPTY_STRING,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        workflowTypeId: 27,
        allViewAccess: 'Y',
        apiType: constants.API_TYPES.FETCH_ADV_OR_CLAIM_ENTITY_CHANGE_TYPE_API,
      },
    };

    return axios
      .post(fetchEntityDetailsUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(setEntityDetails(response.data));
        dispatch({type: advanceActionTypes.IS_FETCHING_ENTITY_DETAILS, isFetchingEntityDetails: false});
      })
      .catch((err) => {
        dispatch({type: advanceActionTypes.IS_FETCHING_ENTITY_DETAILS, isFetchingEntityDetails: false});
        if (err.response && err.response.status === 401) {
          history.push('/login');
        } else {
          const message = err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE;
          dispatch(setToast({
            variant: constants.TOAST.VARIANTS.ERROR,
            message,
            isOpen: true
          }));
        }
      });
  };
};

const shouldShowItems = () => {
  return (dispatch, getState) => {
    const isVisible = isItemsVisible(getState());
    return dispatch({type: advanceActionTypes.SHOULD_SHOW_ITEMS, isItemsVisible: !isVisible});
  }
};

const fetchItemData = () => {
  return (dispatch, getState) => {
    const fetchEntityDetailsUrl = apiService.endpoints.app.generateItemDataUrl();
    const selectedEntityId = selectEntityId(getState());
    const selectedViewId = selectViewId(getState());
    dispatch({type: advanceActionTypes.IS_FETCHING_ITEM_DATA, isFetchingItemData: true});

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        companyId: getValue(constants.LOCAL_STORAGE.ORG_ID) || constants.EMPTY_STRING,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        apiType: constants.API_TYPES.FETCH_ADV_OR_CLAIM_ITEMS_TYPE_API,
        entityId: selectedEntityId,
        viewId: selectedViewId,
        search: '',
        current: 1,
        sortBy: '',
        sortDirection: '',
        rowCount: 100,
      },
    };

    return axios
      .post(fetchEntityDetailsUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch({type: advanceActionTypes.SET_ITEM_DATA, itemData: response.data});
        dispatch({type: advanceActionTypes.IS_FETCHING_ITEM_DATA, isFetchingItemData: false});
        dispatch(shouldShowItems());
      })
      .catch((err) => {
        dispatch({type: advanceActionTypes.IS_FETCHING_ITEM_DATA, isFetchingItemData: false});
        if (err.response && err.response.status === 401) {
          history.push('/login');
        } else {
          const message = err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE;
          dispatch(setToast({
            variant: constants.TOAST.VARIANTS.ERROR,
            message,
            isOpen: true
          }));
        }
      });
  };
};

export { setValue, fetchEntityDetails, shouldShowItems, fetchItemData };