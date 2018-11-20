import 'whatwg-fetch'
import axios from 'axios';
import tasksActionTypes from './tasksActionTypes';
import apiService from '../../shared/service/apiService';
import constants from '../../shared/constants';
import {getValue} from '../../shared/service/localStorage';
import history from "../../shared/service/history";

const tasksPending = () => {
  return {
    type: tasksActionTypes.TASKS.pending
  };
};

const tasksFulfilled = () => {
  return {
    type: tasksActionTypes.TASKS.fulfilled
  };
};

const tasksRejected = () => {
  return {
    type: tasksActionTypes.TASKS.rejected
  };
};

const setErrorMessage = message => {
  return {
    type: tasksActionTypes.SET_ERROR_MESSAGE,
    message,
  };
};

const setTasks = tasks => {
  return {
    type: tasksActionTypes.SET_TASKS,
    tasks,
  };
};

const getTasks = () => {
  return (dispatch, getState) => {
    const tasksUrl = apiService.endpoints.app.generateTasksUrl();
    dispatch(tasksPending());

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        companyId: parseInt(getValue(constants.LOCAL_STORAGE.ORG_ID), 10) || constants.DEFAULT_NUMBER,
        assignedUserId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        search: constants.EMPTY_STRING,
        current: constants.DEFAULT_NUMBER,
        overDue: constants.DEFAULT_BOOL,
        sortBy: constants.EMPTY_STRING,
        sortDirection: constants.DEFAULT_SORT,
        rowCount: constants.DEFAULT_TASK_ROWS,
      },
    };

    return axios
      .post(tasksUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch(tasksFulfilled());
        dispatch(setTasks(response.data));
      })
      .catch((err) => {
        dispatch(tasksRejected());
        if (err.response && err.response.status === 401) {
          history.push('/login');
          dispatch(setErrorMessage(constants.SESSION_EXPIRED));
        } else {
          dispatch(setErrorMessage(err.response ? err.response.data.message : constants.SERVER_UNAVAILABLE));
        }
      });
  };
};

export {getTasks};