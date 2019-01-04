import apiService from "../../shared/service/apiService";
import expenseActionTypes from "./expenseActionTypes";
import {getValue} from "../../shared/service/localStorage";
import constants from "../../shared/constants";
import axios from "axios";
import history from "../../shared/service/history";
import {setToast} from "../home/homeActions";

const fetchExpenseGrid = () => {
  return (dispatch, getState) => {
    const fetchExpenseGridUrl = apiService.endpoints.app.generateExpenseGridUrl();
    dispatch({type: expenseActionTypes.EXPENSE.pending});

    let payload = {
      cookie: getValue(constants.LOCAL_STORAGE.COOKIE) || constants.EMPTY_STRING,
      loadBalancer: getValue(constants.LOCAL_STORAGE.LOADBALANCER) || constants.EMPTY_STRING,
      payload: {
        companyId: getValue(constants.LOCAL_STORAGE.ORG_ID) || constants.EMPTY_STRING,
        userId: getValue(constants.LOCAL_STORAGE.USER_ID) || constants.EMPTY_STRING,
        apiType: constants.API_TYPES.FINANCE_ADV_OR_CLAIM_GRID_TYPE_API,
        search: '',
        current: 1,
        sortBy: '',
        sortDirection: '',
        rowCount: 100,
      },
    };

    return axios
      .post(fetchExpenseGridUrl, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        dispatch({type: expenseActionTypes.EXPENSE.fulfilled});
        dispatch({type: expenseActionTypes.SET_EXPENSE_GRID, expenseGrid: response.data});
      })
      .catch((err) => {
        dispatch({type: expenseActionTypes.EXPENSE.rejected});
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

export { fetchExpenseGrid };