import expenseInitialState from "./expenseInitialState";
import expenseActionTypes from "./expenseActionTypes";
import setPromiseState from "../../shared/service/promiseState";

const expenseReducer = (state = expenseInitialState, action) => {
  switch (action.type) {
    case expenseActionTypes.SET_EXPENSE_GRID:
      return state.set('expenseGrid', action.expenseGrid);
    case expenseActionTypes.EXPENSE.fulfilled:
      return state.setIn(['promise', 'expense'], setPromiseState(false, true, false));

    case expenseActionTypes.EXPENSE.pending:
      return state
        .setIn(['promise', 'expense'], setPromiseState(true, false, false));

    case expenseActionTypes.EXPENSE.rejected:
      return state.setIn(['promise', 'expense'], setPromiseState(false, false, true));
    default:
      return state;
  }
};

export default expenseReducer;

